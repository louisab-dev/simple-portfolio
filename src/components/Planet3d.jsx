import React, { useRef, useState } from "react";
import { useLoader, useFrame } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const GltfModel = ({ modelPath, scale, position }) => {
  const ref = useRef();
  const gltf = useLoader(GLTFLoader, modelPath);

  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => (ref.current.rotation.y += 0.003));
  return (
    <>
      <primitive ref={ref} object={gltf.scene} position={position} scale={7} />
    </>
  );
};

export default GltfModel;
