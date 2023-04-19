import React from 'react';
import PropTypes from 'prop-types';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Problem = ({ data }) => {
  const { problemHeading, leftColumn, rightColumn, problemSectionId } = data;

  return (
    <section className="problem" id={problemSectionId}>
      <h2 className="problem__heading">{problemHeading}</h2>
      <div className="problem__columns">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration={2}
          animateOnce
        >
          <div className="problem__column">
            <div>
              <h3 className="problem__column-heading">
                7% of greenhouse gas emissions
              </h3>
              <div className="problem__column-copy">
                <p>
                  from the production of fats and oils from animals and plants
                </p>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          duration={2}
          animateOnce
        >
          <div className="problem__column">
            <div>
              <h3 className="problem__column-heading">
                {leftColumn.problemLeftColumnHeading}
              </h3>
              <div
                className="problem__column-copy"
                dangerouslySetInnerHTML={{
                  __html: leftColumn.problemLeftColumnCopy,
                }}
              />
            </div>
            <div>
              <h3 className="problem__column-heading">
                {rightColumn.problemRightColumnHeading}
              </h3>
              <div
                className="problem__column-copy"
                dangerouslySetInnerHTML={{
                  __html: rightColumn.problemRightColumnCopy,
                }}
              />
            </div>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

Problem.propTypes = {
  data: PropTypes.shape({
    problemSectionId: PropTypes.string,
    problemHeading: PropTypes.string,
    leftColumn: PropTypes.shape({
      problemLeftColumnHeading: PropTypes.string,
      problemLeftColumnCopy: PropTypes.string,
    }),
    rightColumn: PropTypes.shape({
      problemRightColumnHeading: PropTypes.string,
      problemRightColumnCopy: PropTypes.string,
    }),
  }).isRequired,
};

export default Problem;
