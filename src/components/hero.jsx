import React from 'react';
import PropTypes from 'prop-types';

const Hero = ({ data }) => {
  const { heroHeading, heroCopy } = data;

  return (
    <section className="hero">
      <div className="container hero__content-wrapper">
        <div className="hero__wrapper">
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
  }).isRequired,
};

export default Hero;
