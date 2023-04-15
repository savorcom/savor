import React from 'react';
import PropTypes from 'prop-types';

const heroVideo = ({ videoUrl }) => (
  <div className="hero__video">
    <div className="iframe-container iframe-container-16x9">
      <video className="hero__video-video" muted autoPlay loop>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  </div>
);

heroVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default heroVideo;
