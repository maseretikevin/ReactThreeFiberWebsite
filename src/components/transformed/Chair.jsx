import { useGLTF } from "@react-three/drei";
import chair from "/models/chair.glb";

export function Chair() {
  const furniture = useGLTF(chair);

  return (
    <group>
      <primitive
        object={furniture.scene}
        scale={2}
        position-y={-2}
        rotation-y={-0.5}
        position-x={[-1]}
      />
    </group>
  );
}

useGLTF.preload(chair);
