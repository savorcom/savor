import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const HeroImage = ({ heroImage }) => {
  const image = getImage(heroImage);

  return (
    <div className="hero__image">
      <GatsbyImage className="hero__image-image" image={image} alt="" />
    </div>
  );
};

HeroImage.propTypes = {
  heroImage: PropTypes.shape({}).isRequired,
};

export default HeroImage;
