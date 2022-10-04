import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import GltfModel from "./Planet3d";

export const PlanetViewer = ({
  modelPath,
  scale = 6,
  position = [0, 0, 0],
}) => {
  return (
    <Canvas>
      <ambientLight intensity={0.3} />
      <spotLight position={[15, 15, 15]} angle={0.15} penumbra={1} />
      <pointLight position={[-40, -40, -40]} />
      <Suspense fallback={null}>
        <GltfModel modelPath={modelPath} scale={4} position={position} />
        <OrbitControls />
      </Suspense>
    </Canvas>
  );
};
