import React from "react";
import ReactPlayer from "react-player";
import ReactAudioPlayer from "react-audio-player";
import { Box, Image } from "@chakra-ui/react";
import dynamic from 'next/dynamic';

function Testing() {
    const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });
  return (
    <Box>
      <ReactPlayer
        controls
        url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}
        onReady={() => console.log('OnReady callback')}
        onStart={() => console.log('onStart callback')}
        onPause={() => console.log('onPause callback')}
        onEnded={() => console.log('onEnded callback')}
        onError={() => console.log('onError callback')}
        
      />

      <ReactAudioPlayer
        src={"https://www2.cs.uic.edu/~i101/SoundFiles/BabyElephantWalk60.wav"}
        autoPlay
        controls
      />

      <Image
        src={"https://imageai.readthedocs.io/en/latest/_images/image41.gif"}
      />
    </Box>
  );
}

export default Testing;
