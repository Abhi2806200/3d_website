import React, { Suspense, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF, Html } from '@react-three/drei';

// 3D Model Component
// function GL4Model() {
//   const { scene } = useGLTF("/models/GL4.glb");
//   return (
//     <primitive 
//       object={scene} 
//       scale={1}  // Adjust scale for visibility
//       position={[0, -1, 0]}  // Adjust position to center
//     />
//   );
// }

// Custom Frame Design
function ScreenFrame({ color }: { color: string }) {
  return (
    <>
      {/* Base frame with glowing materials */}
      <mesh position={[0, 0, -0.05]}>
        <boxGeometry args={[2.7, 1.7, 0.1]} /> {/* Frame size */}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.8} />
      </mesh>

      {/* Rounded corner highlights */}
      {[[-1.35, 0.85], [1.35, 0.85], [-1.35, -0.85], [1.35, -0.85]].map(([x, y], i) => (
        <mesh key={i} position={[x, y, 0.05]}>
          <sphereGeometry args={[0.15, 16, 16]} /> {/* Sphere size */}
          <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.9} />
        </mesh>
      ))}
    </>
  );
}

// Preload the model for optimization
useGLTF.preload("/models/GL4.glb");

const GLBViewer: React.FC = () => {
  const [frameColor, setFrameColor] = useState("#FF00FF"); // Dynamic color for the frame
  const [isLoading, setIsLoading] = useState(true); // Loading state

  return (
    <div className="relative w-full h-[600px] bg-gradient-to-r from-purple-800 to-blue-900">
      {/* 3D Viewer */}
      <Canvas
        camera={{
          position: [0, 2, 5],
          fov: 45,
        }}
        gl={{ alpha: true }}
      >
        {/* Lighting */}
        <ambientLight intensity={0.6} />
        <spotLight position={[5, 10, 5]} angle={0.5} intensity={1.5} />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#ffccff" />

        {/* Loading Animation */}
        {isLoading && (
          <Html center>
            <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-pink-500"></div>
          </Html>
        )}

        <Suspense fallback={null} onReady={() => setIsLoading(false)}>
          {/* 3D Model */}
          {/* <GL4Model /> */}

          {/* Custom Frame */}
          <ScreenFrame color={frameColor} />
        </Suspense>

        {/* Orbit Controls */}
        <OrbitControls
          autoRotate={true}
          autoRotateSpeed={2.0}
          enablePan={false}
          enableZoom={true}
        />
      </Canvas>

      {/* Interactive UI */}
      <div className="absolute top-5 left-5 flex flex-col space-y-4">
        <button
          onClick={() => setFrameColor("#FF00FF")}
          className="bg-pink-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Pink Glow
        </button>
        <button
          onClick={() => setFrameColor("#00FFFF")}
          className="bg-teal-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Cyan Glow
        </button>
        <button
          onClick={() => setFrameColor("#FFFF00")}
          className="bg-yellow-500 text-white px-4 py-2 rounded-lg shadow-lg hover:scale-105 transition-all"
        >
          Yellow Glow
        </button>
      </div>
    </div>
  );
};

export default GLBViewer;
