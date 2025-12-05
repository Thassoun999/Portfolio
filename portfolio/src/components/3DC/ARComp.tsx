"use client";

import {
  Center,
  Circle,
  Html,
  OrbitControls,
  Stats,
  useAnimations,
  useProgress,
} from "@react-three/drei";
import { Canvas, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

export type ARProps = {
  pathname: string;
  camPos: any;
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

  const { actions, names } = useAnimations(gltf.animations, gltf.scene);

  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    if (names.length > 0) {
      const action = actions[names[0]];
      if (action) {
        action.setLoop(THREE.LoopRepeat, Infinity); // <-- LOOP FOREVER
        action.reset().play();
      }
    }
  }, [actions, names]);
  gltf.scene.scale.set(1, 1, 1);

  console.log();
  return (
    <>
      <directionalLight
        position={[0, 0, 2]}
        intensity={0.5}
        ref={directionalLightRef}
      />

      <ambientLight intensity={1.5} />

      <Center>
        <primitive
          object={gltf.scene}
          position={[0, -1, 0]}
          children-0-castShadow
          ref={ref}

          // 90 degree on x axis => pi / 2 is 90, pi is 180, 3*pi/2 is 270
        />
      </Center>

      <OrbitControls enableZoom={false} enablePan={false} target={[0, 0, 0]} />
    </>
  );
}

export default function ARComp({ pathname, className, camPos }: ARProps) {
  return (
    <div className={className}>
      <Canvas camera={{ position: camPos }} shadows>
        <Suspense fallback={<Loader />}>
          <Scene pathname={pathname} />
        </Suspense>
      </Canvas>
    </div>
  );
}
