import React, { useRef, useState } from 'react';

function VideoPlayer() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>React Video Player</h2>
      <video
        ref={videoRef}
        width="640"
        height="360"
        controls
        style={{ border: '2px solid #ccc', borderRadius: '8px' }}
      >
        <source
          src="https://www.w3schools.com/html/mov_bbb.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <br />
      <button
        onClick={togglePlayPause}
        style={{
          marginTop: '10px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer',
        }}
      >
        {isPlaying ? 'Pause' : 'Play'}
      </button>
    </div>
  );
}

export default VideoPlayer;