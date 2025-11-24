"use client";
import { useHelper } from "@react-three/drei";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import { useRef, useEffect, Suspense, useState, useMemo } from "react";
import { twMerge } from "tailwind-merge";

import * as THREE from "three";

type StarProps = {
  position: any;
  args?: any;
  mousePos?: { x: number; y: number };
};

export type StarCanvasProps = {
  className?: string;
};

function Stars({ position, args, mousePos = undefined }: StarProps) {
  // React hook that lets you reference a value that's not needed for rendering.
  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    if (ref && ref.current) {
      if (mousePos) {
        // Rotates star map
        ref.current.rotation.x += delta * 0.01;
        ref.current.rotation.y -= delta * 0.01;

        // Shifts landscape position of each point
        ref.current.position.y = mousePos.y * 0.00015;
        ref.current.position.x = mousePos.x * -0.0001;
      }
    }
  });

  const texture = useLoader(THREE.TextureLoader, "/Media/Assets/stars_1.png");

  //Additive blending is the type of blending we do when we add different colors together and add the result.
  // This is the way that our vision works together with light and this is
  // how we can perceive millions of different colors on our monitors — they are really just blending three different primary colors together.
  return (
    <points position={position} ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach={"attributes-position"} args={args} />
        {/* 
        array={particlePositions}  --> Underlying data array, [x1, y1, z1, x2, y2, z2]. Length = numVertices * itemSize!
        itemSize={3} --> How many array elements belong to one vertex. (x1, y1, z1) = one vertex
        count={particlePositions.length / 3} --> Number of vertices or itemsz

        The args in react-three-fiber only cares about the array and the itemsize
        */}
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        map={texture}
        transparent={true}
        depthWrite={false}
        alphaTest={0.01}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Scene() {
  const directionalLightRef = useRef<any>(null);

  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  document.addEventListener("mousemove", (e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  });

  console.log(mousePos);

  // Shows a helper, in this case, it will show a square stating where the light starts and a line point the direction to our object!
  // useHelper(directionalLightRef, THREE.DirectionalLightHelper);

  // Use useMemo so we only generate particle positions once
  const particlePositions = useMemo(() => {
    const particleCount = 700;
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < arr.length; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  }, []);

  // old star color 0x44aa88
  return (
    <group>
      <directionalLight
        ref={directionalLightRef}
        position={[-1, 2, 4]}
        color={"white"}
        intensity={1}
      />
      <Suspense fallback={null}>
        <Stars
          args={[particlePositions, 3]}
          position={[0, 0, 0]}
          mousePos={mousePos}
        />
      </Suspense>
    </group>
  );
}

export default function StarCanvas({ className = "" }: StarCanvasProps) {
  return (
    <div className={className}>
      <Canvas
        onCreated={(state) => {
          state.gl.setClearColor("#1c1624");
        }}
        camera={{
          fov: 75,
          aspect: 2,
          near: 0.1, // smaller near plane was 1.5
          far: 100, // larger far plane was 5
        }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}

/*
      <directionalLight
        ref={directionalLightRef}
        position={[-1, 2, 4]}
        color={"white"}
        intensity={1}
      />
*/
