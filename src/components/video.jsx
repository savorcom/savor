/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
import PropTypes from 'prop-types';

const Video = ({ videoFileMp4, videoFileWebm, videoThumbnail }) => (
  <div className="iframe-container iframe-container-16x9">
    <video controls poster={videoThumbnail}>
      <source src={videoFileWebm} type="video/webm" />
      <source src={videoFileMp4} type="video/mp4" />
    </video>
  </div>
);

Video.propTypes = {
  videoFileMp4: PropTypes.string.isRequired,
  videoFileWebm: PropTypes.string.isRequired,
  videoThumbnail: PropTypes.string,
};

Video.defaultProps = {
  videoThumbnail: '',
};

export default Video;
