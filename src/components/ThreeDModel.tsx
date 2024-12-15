import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";

// Type definition for the ThreeDModel component's props
interface ThreeDModelProps {
  modelPath: string;
}

// Load 3D Model Component
const ThreeDModel: React.FC<ThreeDModelProps> = ({ modelPath }) => {
  const { scene } = useGLTF(modelPath);
  return <primitive object={scene} scale={0.5} />;
};

// Main Component
const ThreeDVideoComponent: React.FC = () => {
  return (
    <div style={{ width: "100%", height: "500px", marginTop: "2rem" }}>
      <Canvas>
        {/* Camera */}
        <PerspectiveCamera makeDefault position={[0, 2, 5]} />
        <OrbitControls />

        {/* Lights */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} />

        {/* 3D Model */}
        <ThreeDModel modelPath="/GL4.glb" />
      </Canvas>
    </div>
  );
};

export default ThreeDVideoComponent;
