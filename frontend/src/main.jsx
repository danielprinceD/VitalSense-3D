import React from "react";
import ReactDOM from "react-dom/client";
import Avatar from "./Avatar.jsx";
import { Canvas } from "@react-three/fiber";
import { Box, OrbitControls } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <Canvas camera={[3, 3, 3]}>
      <color attach={"background"} args={["#ececec"]} />

      <mesh position={[0, 0, 4]}>
        <boxGeometry />
        <meshStandardMaterial />
      </mesh>
      <Avatar />
    </Canvas>
  </>
);
