import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./GltfModel";

const ModelViewer = ({
  modelPath,
  scale = 0.0023,
  position = [0, -1.75, 0],
}) => {
  return (
    <Canvas
      camera={{ fov: 60, aspect: 0.6, near: 0.1, far: 10000 }}
      onCreated={({ camera }) => {
        camera.lookAt(0, 0, 0);
      }}
    >
      <ambientLight intensity={0.6} />
      <spotLight position={[0, 10, 0]} angle={0.15} penumbra={0.6} />
      <pointLight position={[0, 0, 0]} intensity={1} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={scale} position={position} />
        <OrbitControls target={[0, -2, 0]} />
      </Suspense>
    </Canvas>
  );
};

export default ModelViewer;
