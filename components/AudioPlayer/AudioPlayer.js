import React from 'react';
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = () => {
  return (
    <ReactAudioPlayer
      src={"https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"}
      autoPlay
      controls
    />
  );
};

export default AudioPlayer;