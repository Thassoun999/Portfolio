"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Loader } from "./ARComp";
import { Suspense, useRef, useState } from "react";
import { Center, useTexture } from "@react-three/drei";
import * as THREE from "three";

export type BioPhotoProps = {
  key: string;
  scale?: number[];
  className?: string;
};

function Scene({ scale }: { scale: number[] }) {
  // const directionalLightRef = useRef<any>(null);
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useTexture("/Media/About/BioPhoto_1.jpg");

  const [onMesh, setOnMesh] = useState(false);
  const { pointer } = useThree();

  const vertexShader = `
    varying vec2 vUv;

    uniform float uTime;
    uniform float uAmplitude;
    uniform float uWaveLength;
    uniform vec2 uMouse;
    void main() {
        vUv = uv;

        vec3 newPos = position;
        
        float wave1 = uAmplitude * sin(position.x * uWaveLength + uTime + uMouse.x * 5.0);
        float wave2 = uAmplitude * sin(position.y * uWaveLength + uTime + uMouse.y * 5.0);

        newPos.z = position.z + (wave1 * 0.5) + (wave2 * 0.5);

        gl_Position = projectionMatrix * modelViewMatrix * vec4(newPos, 1.0);
    }
  `;

  const fragmentShader = `
    uniform sampler2D uTexture;
    varying vec2 vUv;

    void main() {
        vec4 color = texture2D(uTexture, vUv);
        gl_FragColor=color;
    }
  `;

  const amplitude = 0.03;
  const waveLength = 5;
  const mouse = new THREE.Vector2(0, 0);
  const uniforms = useRef({
    uTexture: { value: texture },
    uTime: { value: 0 },
    uAmplitude: { value: amplitude },
    uWaveLength: { value: waveLength },
    uMouse: { value: mouse },
  });

  console.log(mouse);

  useFrame(() => {
    if (meshRef.current && meshRef.current.material) {
      if (onMesh) {
        mouse.x = pointer.x;
        mouse.y = pointer.y;
        (
          meshRef.current.material as THREE.ShaderMaterial
        ).uniforms.uMouse.value = mouse;
      }

      (
        meshRef.current.material as THREE.ShaderMaterial
      ).uniforms.uTime.value += 0.01;
      (
        meshRef.current.material as THREE.ShaderMaterial
      ).uniforms.uAmplitude.value = amplitude;
      (
        meshRef.current.material as THREE.ShaderMaterial
      ).uniforms.uWaveLength.value = waveLength;
    }
  });

  return (
    <>
      <directionalLight position={[0, 0, 2]} intensity={0.5} />

      <ambientLight intensity={1.5} />
      <Center>
        <mesh
          position={[0, 0, 0]}
          ref={meshRef}
          scale={[2.2, 2.2, 2.2]}
          onPointerEnter={() => {
            setOnMesh(true);
          }}
          onPointerLeave={() => {
            setOnMesh(false);
          }}
        >
          <planeGeometry args={[2, 2, 15, 15]} scale={scale} />
          <shaderMaterial
            vertexShader={vertexShader}
            fragmentShader={fragmentShader}
            uniforms={uniforms.current}
          />
        </mesh>
      </Center>
    </>
  );
}

export default function BioPhoto(props: BioPhotoProps) {
  const { key, scale = [1, 1, 1] } = props;

  return (
    <Canvas
      camera={{
        fov: 100,
        position: [0, 0, 2],
        near: 0.01,
        far: 10,
        isPerspectiveCamera: true,
      }}
      shadows
      key={key}
    >
      <Suspense fallback={<Loader />}>
        <Scene scale={scale} />
      </Suspense>
    </Canvas>
  );
}

/*
      <Image
        width={3839}
        height={4492}
        alt="Tae (Sydra) Hassoun Bio Photo"
        src={"/Media/About/BioPhoto_1.jpg"}
      />
*/
