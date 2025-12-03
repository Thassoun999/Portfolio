"use client";

import {
  Center,
  Circle,
  Gltf,
  Html,
  OrbitControls,
  Stats,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export type SaturnLavenderProps = {
  pathname: string;
  className?: string;
};

function Loader() {
  const { progress } = useProgress();
  console.log(progress);
  return <Html center>{progress} % loaded</Html>;
}

function Scene({ pathname }: { pathname: string }) {
  const directionalLightRef = useRef<any>(null);

  const gltf = useLoader(GLTFLoader, pathname);
  console.log("Loaded GLB:", gltf);
  console.log("Scene children:", gltf.scene.children);

  gltf.scene.scale.set(20, 20, 20);
  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />

      <ambientLight intensity={1} />

      <Center>
        <primitive
          object={gltf.scene}
          position={[0, -1, 0]}
          children-0-castShadow
          rotation={[Math.PI / 2, 0, 0]}
          // 90 degree on x axis => pi / 2 is 90, pi is 180, 3*pi/2 is 270
        />
      </Center>

      <OrbitControls target={[0, 0, 0]} />
    </>
  );
}

export default function SaturnLavenderComp({
  pathname,
  className,
}: SaturnLavenderProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: [0, -0.5, 1] }} shadows>
        <Suspense fallback={<Loader />}>
          <Scene pathname={pathname} />
        </Suspense>
      </Canvas>
    </div>
  );
}
