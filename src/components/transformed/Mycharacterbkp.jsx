import { Suspense, useEffect, useRef, useState } from "react";
import { Html, Preload, useAnimations, useGLTF } from "@react-three/drei";
import scenePath from "/models/mycharacter.glb";
import { useFrame } from "@react-three/fiber";

const Avatar = () => {
  const [index, setIndex] = useState(2);
  const avatar = useGLTF(scenePath);
  const ref = useRef();
  const { actions, names } = useAnimations(avatar.animations, avatar.scene);

  const [isClicked, setIsClicked] = useState(false);
  useEffect(() => {
    console.log(index);
    actions[names[index]]?.reset().fadeIn(0.5).play();
    return () => {
      actions[names[index]]?.fadeOut(0.5);
    };
  }, [index, actions, names]);

  // useFrame((state) => {
  //   const angle = state.clock.elapsedTime;
  //   // ref.current.rotation.y = angle * 0.2 * (Math.PI / 2);
  //   state.camera.position.x = Math.sin(angle) * 3;
  //   state.camera.position.z = Math.cos(angle) * 3;
  //   state.camera.lookAt(0, 0, 0);
  // });
  return (
    <group ref={ref}>
      <ambientLight intensity={1.5} />
      <primitive
        object={avatar.scene}
        scale={2}
        position-y={-3}
        rotation-y={-0.5}
        position-x={[-1]}
        onClick={() => {
          setIndex((index + 1) % names.length);
          setIsClicked(!isClicked);
        }}
      />
    </group>
  );
};

export function MyCharacterbkp() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <pointLight position={[1, 1, 1]} />
      <Avatar />
      <Preload all />
    </>
  );
}
function Annotation({ children, ...props }) {
  return (
    <Html
      {...props}
      transform
      geometry={
        /** The geometry is optional, it allows you to use any shape.
         *  By default it would be a plane. We need round edges here ...
         */
        <roundedPlaneGeometry args={[1.66, 0.47, 0.24]} />
      }
    >
      <div className="annotation">{children}</div>
    </Html>
  );
}
useGLTF.preload(scenePath);
