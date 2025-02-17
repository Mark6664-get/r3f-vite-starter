import {
  OrbitControls,
  Sky,
  Environment,
  ContactShadows,
} from "@react-three/drei";
import { Avatar } from "./Avatar";
import { useControls } from "leva";

export const Experience = () => {
  const { animation } = useControls({
    animation: {
      value: "Typing",
      options: ["Typing", "Standing", "Falling"],
    },
  });
  return (
    <>
      <OrbitControls />
      <Sky />
      <Environment preset="forest" />
      <group position-y={-1}>
        <ContactShadows
          opacity={0.45}
          scale={10}
          blur={1}
          far={10}
          resolution={256}
          color="#000000"
        />
        <Avatar animation={animation} />

        <ambientLight intensity={0.5} />

        {animation === "Typing" && (
          <mesh scale={[0.8, 0.5, 0.8]} position-y={0.25}>
            <boxGeometry />
            <meshStandardMaterial color="white" />
          </mesh>
        )}

        <mesh scale={5} rotation-x={-Math.PI * 0.5} position-y={-0.001}>
          <planeGeometry />
          <meshStandardMaterial color="white" />
        </mesh>
      </group>
    </>
  );
};
