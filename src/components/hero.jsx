import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Hero = ({ data }) => {
  const { heroHeading, heroCopy, heroImage } = data;
  const heroImg = getImage(heroImage);

  return (
    <section className="hero">
      <div className="container hero__content-wrapper">
        <div className="hero__wrapper">
          <GatsbyImage
            className="hero__image"
            image={heroImg}
            alt={heroImage.altText}
          />
          <div className="hero__content">
            <div
              className="hero__heading"
              dangerouslySetInnerHTML={{ __html: heroHeading }}
            />
            <div
              className="hero__copy"
              dangerouslySetInnerHTML={{ __html: heroCopy }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    heroHeading: PropTypes.string,
    heroCopy: PropTypes.string,
    heroImage: PropTypes.shape({
      gatsbyImage: PropTypes.shape({}),
      altText: PropTypes.string,
    }),
  }).isRequired,
};

export default Hero;
