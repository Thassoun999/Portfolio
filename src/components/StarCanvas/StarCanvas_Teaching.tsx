/*
"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Suspense, useRef, useState } from "react";
import * as THREE from "three";
import {
  MeshDistortMaterial,
  MeshWobbleMaterial,
  OrbitControls,
  useHelper,
} from "@react-three/drei";

type GeoProps = {
  position: any;
  color: string;
  args?: any;
};

// EACH OBJECT WILL HAVE A SET OF ARGS, REVIEW THEM!!!!!!!!!!!

function Cube({ position, args, color }: GeoProps) {
  // React hook that lets you reference a value that's not needed for rendering.
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state, delta) => {
    // delta is time between last fram
    // state represents the state of our object being referenced here via the hook
    if (ref && ref.current) {
      // so many options for the ref!! See the Three.Mesh ref!
      ref.current.rotation.x += delta;
      ref.current.rotation.y -= delta * 2;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    }
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={args || undefined} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Sphere(props: GeoProps) {
  const { position, color, args } = props;

  const ref = useRef<any>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useFrame((state, delta) => {
    // delta is time between last fram
    // state represents the state of our object being referenced here via the hook
    if (ref && ref.current) {
      // so many options for the ref!! See the Three.Mesh ref!
      ref.current.rotation.y += delta * (isHovered ? 1.2 : 0.2);
    }
  });

  //event.stopPropagation() -- stopPropagation will stop underlying handlers from firing

  return (
    <mesh
      position={position}
      ref={ref}
      onPointerEnter={(event) => (event.stopPropagation(), setIsHovered(true))}
      onPointerLeave={(event) => (event.stopPropagation(), setIsHovered(false))}
      onClick={() => setIsClicked(!isClicked)}
      scale={isClicked ? 2 : 1}
    >
      <sphereGeometry args={args || undefined} />
      <MeshDistortMaterial
        color={isHovered ? "hotpink" : color}
        factor={5}
        speed={2}
      />
    </mesh>
  );
}

function Torus(props: GeoProps) {
  const { position, color, args } = props;

  return (
    <mesh position={position}>
      <torusGeometry args={args || undefined} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function TorusKnot(props: GeoProps) {
  const { position, color, args } = props;

  const ref = useRef<any>(null);

  useFrame((state, delta) => {
    // delta is time between last fram
    // state represents the state of our object being referenced here via the hook
    if (ref && ref.current) {
      // so many options for the ref!! See the Three.Mesh ref!
      ref.current.rotation.x += delta;
      ref.current.rotation.y -= delta * 2;
      ref.current.position.z = Math.sin(state.clock.elapsedTime) * 2;
    }
  });
  return (
    <mesh position={position} ref={ref}>
      <torusKnotGeometry args={args || undefined} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
}

function Scene() {
  const directionalLightRef = useRef<any>(null);

  // Shows a helper, in this case, it will show a square stating where the light starts and a line point the direction to our object!
  useHelper(directionalLightRef, THREE.DirectionalLightHelper);

  // See LEVA for easier time messing with debugging tools and affecting 3D objects on site!
  // see the useControls hook and how it can be attached to geometry args!

  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />
      <ambientLight intensity={0.1} />

      <Suspense fallback={null}>
        <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"orange"} />
            <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"purple"}  />
                      <Torus
            position={[2, 0, 0]}
            args={[0.8, 0.1, 30, 30]}
            color={"blue"}
          />

          <TorusKnot
            position={[-2, 0, 0]}
            args={[0.5, 0.1, 1000, 50]}
            color={"hotpink"}
          />
        *
        <Sphere position={[0, 0, 0]} args={[1, 30, 30]} color={"purple"} />
      </Suspense>

      <OrbitControls enableZoom={false} />

    </>
  );
}

export default function StarCanvas_Teaching() {
  return (
    <div className="fixed w-full h-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <Canvas>
        <Scene />
      </Canvas>
    </div>
  );
}

// mesh is a fundamental building block for building anything in threeejs.
// It needs to contain a shape and a material
// lighting needs to be used to see our mesh
// meshes and geometry can be grouped

// useFrame is a hook that allows you to execute code on every rendered frame, like running effects, updating controls, and so on
*/
