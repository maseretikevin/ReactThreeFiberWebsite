import React, { Suspense, useEffect, useRef, useState } from "react";
import Loader from "../loader/Loader";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import {
  Billboard,
  Center,
  Cloud,
  Clouds,
  Decal,
  Float,
  Html,
  OrbitControls,
  Stage,
} from "@react-three/drei";
import { mediaConstants } from "../../assets/constants/constants.js";
import "../../index.css";
import { AmbientLight, TextureLoader } from "three";
import PlayButton from "../PlayButton.jsx";
import { MyCharacterbkp } from "../transformed/Mycharacterbkp.jsx";
import Nav from "../navigation/Nav.jsx";

function Models() {
  const texture = useLoader(TextureLoader, mediaConstants.keyboard);
  const ref = useRef();
  useFrame((state) => {
    const t = state.clock.elapsedTime / 2;
    ref.current.rotation.set(0, t, 0);
  });
  return (
    <mesh ref={ref}>
      <boxGeometry />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}
function StormClouds() {
  return (
    <Clouds>
      <Cloud segments={40} bounds={[10, 2, 2]} volume={10} color="orange" />
      <Cloud seed={1} scale={2} volume={5} color="hotpink" fade={100} />
    </Clouds>
  );
}

function BillboardExample() {
  return (
    <Canvas>
      <Billboard follow={true} lockX={false} lockY={false} lockZ={false}>
        <Text>Hello</Text>
      </Billboard>
    </Canvas>
  );
}
const Overlay = () => {
  return (
    <>
      <main>
        <section
          className="hero d-flex justify-content-center align-items-center"
          id="section_1"
        >
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-12">
                <div className="hero-text">
                  <div className="hero-title-wrap d-flex align-items-center mb-4">
                    <h1 className="hero-title ms-3 mb-0">Hello!</h1>
                  </div>

                  <h2 className="mb-4 overlap">Welcome to my portfolio</h2>
                </div>
              </div>
            </div>
          </div>

          {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#535da1"
              fill-opacity="1"
              d="M0,160L24,160C48,160,96,160,144,138.7C192,117,240,75,288,64C336,53,384,75,432,106.7C480,139,528,181,576,208C624,235,672,245,720,240C768,235,816,213,864,186.7C912,160,960,128,1008,133.3C1056,139,1104,181,1152,202.7C1200,224,1248,224,1296,197.3C1344,171,1392,117,1416,90.7L1440,64L1440,0L1416,0C1392,0,1344,0,1296,0C1248,0,1200,0,1152,0C1104,0,1056,0,1008,0C960,0,912,0,864,0C816,0,768,0,720,0C672,0,624,0,576,0C528,0,480,0,432,0C384,0,336,0,288,0C240,0,192,0,144,0C96,0,48,0,24,0L0,0Z"
            ></path>
          </svg> */}
        </section>
      </main>
    </>
  );
};

const Guide = () => {
  return (
    <p className="navigate">
      <a className="custom-btn btn custom-link" href="/about">
        More
      </a>
    </p>
  );
};

const Home = () => {
  const [isPlaying, setisPlaying] = useState(false);
  useEffect(() => {
    const audio = new Audio(mediaConstants.song);
    audio.volume = 0.5;
    audio.loop;

    if (isPlaying) {
      audio.play();
    }
    return () => {
      audio.pause();
    };
  }, [isPlaying]);

  return (
    <>
      <Overlay />
      <Guide />
      <Canvas camera={{ fov: 60, near: 0.1, far: 1000 }}>
        <color attach="background" args={["#dedddf"]} />
        <OrbitControls />
        <Suspense fallback={<Loader />}>
          <Center>
            <MyCharacterbkp />
          </Center>
        </Suspense>
      </Canvas>
      <PlayButton isPlaying={isPlaying} setisPlaying={setisPlaying} />
    </>
  );
};

export default Home;
