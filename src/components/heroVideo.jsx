import React from 'react';
import PropTypes from 'prop-types';

import heroVideoFile from '../images/butter.mp4';

const heroVideo = ({ videoUrl }) => (
  <div className="hero__video">
    <div className="iframe-container iframe-container-16x9">
      <video className="hero__video-video" muted autoPlay loop>
        <source src={heroVideoFile} type="video/mp4" />
      </video>
    </div>
  </div>
);

heroVideo.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default heroVideo;
