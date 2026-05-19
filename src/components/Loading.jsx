import React from 'react';
import cateringVideo from '../assets/Catering.mp4';
import '../styles/Loading.css';

const Loading = ({ onVideoEnd }) => {
  return (
    <div className="loading-container">
      <div className="loading-video-wrapper">
        <video 
          autoPlay 
          muted 
          playsInline
          onEnded={onVideoEnd}
          className="loading-video"
        >
          <source src={cateringVideo} type="video/mp4" />
        </video>
      </div>
      <div className="loading-content">
        {/* <h2 className="loading-text">Puranik Catering</h2>
        <p className="loading-subtext">A Tradition of Taste</p> */}
      </div>
    </div>
  );
};

export default Loading;
