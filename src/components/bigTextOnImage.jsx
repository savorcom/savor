import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import DripBorder from './dripBorder';

const BigTextOnImage = () => (
  <section
    className="big-text-on-image"
    style={{
      backgroundImage: `url(https://picsum.photos/1600/900)`,
    }}
  >
    <div className="big-text-on-image__text-wrapper">
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        delay={0}
        duration={2}
        animateOnce
      >
        <p>Craveworthy</p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        delay={500}
        duration={2}
        animateOnce
      >
        <p>+ Sustainable</p>
      </AnimationOnScroll>
      <AnimationOnScroll
        animateIn="animate__fadeInUp"
        delay={1000}
        duration={2}
        animateOnce
      >
        <p>= Impact</p>
      </AnimationOnScroll>
    </div>
    <DripBorder />
  </section>
);

BigTextOnImage.propTypes = {};

BigTextOnImage.defaultProps = {};

export default BigTextOnImage;
