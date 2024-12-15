import React from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Fallback } from './Fallback';

interface ModelProps {
  url?: string;
  fallbackType?: 'box' | 'sphere' | 'torus';
  scale?: number;
  rotation?: [number, number, number];
  position?: [number, number, number];
  autoRotate?: boolean;
}

export function Model({ 
  url, 
  fallbackType = 'box',
  scale = 1, 
  rotation = [0, 0, 0], 
  position = [0, 0, 0],
  autoRotate = false 
}: ModelProps) {
  const [error, setError] = React.useState(false);
  const modelRef = React.useRef<THREE.Group>();

  let gltf;
  try {
    gltf = url ? useGLTF(url) : null;
  } catch (e) {
    if (!error) setError(true);
  }

  useFrame((state, delta) => {
    if (autoRotate && modelRef.current) {
      modelRef.current.rotation.y += delta * 0.5;
    }
  });

  if (error || !url || !gltf) {
    return (
      <Fallback
        type={fallbackType}
        scale={scale}
        position={position}
        autoRotate={autoRotate}
      />
    );
  }

  return (
    <primitive 
      ref={modelRef}
      object={gltf.scene} 
      scale={scale} 
      rotation={rotation} 
      position={position} 
    />
  );
}