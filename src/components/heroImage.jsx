import React from 'react';
// import PropTypes from 'prop-types';

import heroImage from '../images/hero-image.jpg';

const HeroImage = () => (
  <div className="hero__image">
    <img
      className="hero__image-image"
      src={heroImage}
      alt=""
      width="1920"
      height="1280"
      decoding="async"
    />
  </div>
);

HeroImage.propTypes = {};

HeroImage.defaultProps = {};

export default HeroImage;
