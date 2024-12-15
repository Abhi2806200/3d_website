import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { 
  OrbitControls, 
  PerspectiveCamera, 
  Environment, 
  ContactShadows 
} from '@react-three/drei';

interface SceneProps {
  children: React.ReactNode;
  cameraPosition?: [number, number, number];
  enableZoom?: boolean;
  autoRotate?: boolean;
  height?: string;
}

export function Scene({ 
  children, 
  cameraPosition = [0, 0, 5],
  enableZoom = true,
  autoRotate = false,
  height = "400px"
}: SceneProps) {
  return (
    <div style={{ height, width: '100%' }}>
      <Canvas shadows>
        <PerspectiveCamera makeDefault position={cameraPosition} />
        <Suspense fallback={null}>
          <Environment preset="studio" />
          {children}
          <ContactShadows 
            opacity={0.5}
            scale={10}
            blur={1}
            far={10}
            resolution={256}
            color="#000000"
          />
        </Suspense>
        <OrbitControls
          enableZoom={enableZoom}
          autoRotate={autoRotate}
          autoRotateSpeed={2}
          minPolarAngle={Math.PI / 4}
          maxPolarAngle={Math.PI / 1.5}
        />
      </Canvas>
    </div>
  );
}