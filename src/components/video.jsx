/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoFileMp4, videoFileWebm }) => (
  <div className="iframe-container iframe-container-16x9">
    <video controls>
      <source src={videoFileWebm} type="video/webm" />
      <source src={videoFileMp4} type="video/mp4" />
    </video>
  </div>
);

Video.propTypes = {
  videoFileMp4: PropTypes.string.isRequired,
  videoFileWebm: PropTypes.string.isRequired,
};

export default Video;
