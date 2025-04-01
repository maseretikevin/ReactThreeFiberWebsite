import { Html } from "@react-three/drei";
import React from "react";
import "../index.css";
import { mediaConstants } from "../assets/constants/constants";

const PlayButton = ({ isPlaying, setisPlaying }) => {
  return (
    <>
      <button
        onClick={() => {
          setisPlaying(!isPlaying);
          if (isPlaying) {
            console.log("playing");
          }
        }}
        className="audio-button"
      >
        {isPlaying ? (
          <img src={mediaConstants.playButton} />
        ) : (
          <img src={mediaConstants.stopplayButton} />
        )}
      </button>
    </>
  );
};

export default PlayButton;
