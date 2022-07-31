import React from 'react';
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import('react-player'), {ssr: false});

const VideoPlayer = ({url}) => {

  return (
    <ReactPlayer
      controls
      url={url}
      width='100%'
      onReady={() => console.log('OnReady callback')}
      onStart={() => console.log('onStart callback')}
      onPause={() => console.log('onPause callback')}
      onEnded={() => console.log('onEnded callback')}
      onError={() => console.log('onError callback')}
    />
  );
};

export default VideoPlayer;