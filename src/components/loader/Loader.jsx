import { Html, useProgress } from "@react-three/drei";
import "./Loader.css";

import React from "react";

const Loader = () => {
  const { progress } = useProgress();
  return <Html center>{progress.toFixed(2)} % Loaded...</Html>;
};

export default Loader;
