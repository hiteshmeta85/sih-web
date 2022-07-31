import React from 'react';
import ReactPlayer from "react-player";

const VideoPlayer = () => {
  return (
    <ReactPlayer
      controls
      url={"https://www.youtube.com/watch?v=GePs-zWeS2o"}
      onReady={() => console.log('OnReady callback')}
      onStart={() => console.log('onStart callback')}
      onPause={() => console.log('onPause callback')}
      onEnded={() => console.log('onEnded callback')}
      onError={() => console.log('onError callback')}

    />
  );
};

export default VideoPlayer;