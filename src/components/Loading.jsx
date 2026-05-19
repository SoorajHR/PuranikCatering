import React from 'react';
import '../styles/Loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <div className="loading-content">
        <div className="spinner"></div>
        <h2 className="loading-text">Puranik Catering</h2>
        <p className="loading-subtext">A Tradition of Taste</p>
      </div>
    </div>
  );
};

export default Loading;
