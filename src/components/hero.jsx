import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import Marquee from 'react-fast-marquee';

const Hero = ({ data }) => {
  const { heroHeading, heroCopy, heroImage, marquee } = data;
  const heroImg = getImage(heroImage);

  return (
    <section className="hero">
      <div className="container">
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

      <Marquee gradient={false} speed="10">
        <div className="hero__marquee hero__marquee--small">
          {marquee.map((item) => (
            <span key={item.marqueeItem} className="hero__marquee-item">
              {item.marqueeItem}
            </span>
          ))}
        </div>
      </Marquee>
      <Marquee gradient={false} speed="10" direction="right">
        <div className="hero__marquee hero__marquee--large">
          {marquee.map((item) => (
            <span key={item.marqueeItem} className="hero__marquee-item">
              {item.marqueeItem}
            </span>
          ))}
        </div>
      </Marquee>
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
    marquee: PropTypes.arrayOf(
      PropTypes.shape({
        marqueeItem: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Hero;
