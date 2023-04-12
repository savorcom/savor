import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoUrl }) => (
  <div className="iframe-container iframe-container-16x9">
    <iframe
      src={videoUrl}
      title="About Savor Foods"
      width="1920"
      height="1080"
      allowFullScreen
    />
  </div>
);

Video.propTypes = {
  videoUrl: PropTypes.string.isRequired,
};

export default Video;
