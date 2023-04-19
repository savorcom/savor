import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import DripBorder from './dripBorder';

const BigTextOnImage = ({ data }) => {
  const { backgroundImage, textLines } = data;
  return (
    <section
      className="big-text-on-image"
      style={{
        backgroundImage: `url(${backgroundImage.mediaItemUrl})`,
      }}
    >
      <div className="big-text-on-image__text-wrapper">
        {textLines.map((line, index) => (
          <AnimationOnScroll
            animateIn="animate__fadeInUp"
            delay={index * 500}
            duration={1}
            animateOnce
            key={line.textLine}
          >
            <p>{line.textLine}</p>
          </AnimationOnScroll>
        ))}
      </div>
      <DripBorder />
    </section>
  );
};

BigTextOnImage.propTypes = {
  data: PropTypes.shape({
    backgroundImage: PropTypes.shape({
      mediaItemUrl: PropTypes.string,
    }),
    textLines: PropTypes.arrayOf(
      PropTypes.shape({
        textLine: PropTypes.string,
      })
    ),
  }).isRequired,
};

BigTextOnImage.defaultProps = {};

export default BigTextOnImage;
