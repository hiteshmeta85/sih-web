import React from 'react';
import ReactAudioPlayer from "react-audio-player";

const AudioPlayer = ({src}) => {
  return (
    <ReactAudioPlayer
      src={src}
      autoPlay
      controls
    />
  );
};

export default AudioPlayer;