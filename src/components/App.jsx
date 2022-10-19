import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Model } from "./Michelle";
import { OrbitControls } from "@react-three/drei";

//import "./styles.css";

export default function App() {
  return (
    <>
        <div style={{
            width: "1000px",
            height: "1200px",
        }}>
            <Canvas>
                <OrbitControls />
                <directionalLight intensity={0.5} />
                <ambientLight intensity={0.5} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
            </Canvas>
        </div>
    </>
  );
}
