import { Box, Sphere, Torus } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React from 'react';
import * as THREE from 'three';

interface FallbackProps {
  type?: 'box' | 'sphere' | 'torus';
  scale?: number;
  position?: [number, number, number];
  autoRotate?: boolean;
  color?: string;
}

export function Fallback({ 
  type = 'box', 
  scale = 1, 
  position = [0, 0, 0],
  autoRotate = false,
  color = '#6366f1'
}: FallbackProps) {
  const meshRef = React.useRef<THREE.Mesh>(null);

  useFrame((state, delta) => {
    if (autoRotate && meshRef.current) {
      meshRef.current.rotation.y += delta * 0.5;
    }
  });

  const material = new THREE.MeshPhysicalMaterial({
    color,
    metalness: 0.9,
    roughness: 0.1,
    clearcoat: 1,
    clearcoatRoughness: 0.1
  });

  switch (type) {
    case 'sphere':
      return <Sphere ref={meshRef} args={[1, 64, 64]} scale={scale} position={position} material={material} />;
    case 'torus':
      return <Torus ref={meshRef} args={[1, 0.4, 64, 128]} scale={scale} position={position} material={material} />;
    default:
      return <Box ref={meshRef} args={[1, 1, 1]} scale={scale} position={position} material={material} />;
  }
}