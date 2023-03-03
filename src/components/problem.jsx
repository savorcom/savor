import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Problem = ({ data }) => {
  const {
    problemImage,
    problemHeading,
    leftColumn,
    rightColumn,
    problemSectionId,
  } = data;
  const problemImg = getImage(problemImage);
  const leftColImg = getImage(leftColumn.problemLeftColumnIcon);
  const rightColImg = getImage(rightColumn.problemRightColumnIcon);

  return (
    <section className="problem" id={problemSectionId}>
      <div className="problem__image-wrapper">
        <GatsbyImage
          className="problem__image"
          image={problemImg}
          alt={problemImage.altText}
        />
      </div>
      <h2 className="problem__heading">{problemHeading}</h2>
      <div className="problem__columns">
        <AnimationOnScroll
          animateIn="animate__fadeInLeft"
          duration={3}
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
              <GatsbyImage
                className="problem__column-icon"
                image={leftColImg}
                alt={leftColumn.problemLeftColumnIcon.altText}
              />
              <p className="problem__column-icon-text">
                <small>{leftColumn.problemLeftColumnIconText}</small>
              </p>
            </div>
          </div>
        </AnimationOnScroll>
        <AnimationOnScroll
          animateIn="animate__fadeInRight"
          duration={3}
          animateOnce
        >
          <div className="problem__column">
            <h3 className="problem__column-heading">
              {rightColumn.problemRightColumnHeading}
            </h3>
            <div
              className="problem__column-copy"
              dangerouslySetInnerHTML={{
                __html: rightColumn.problemRightColumnCopy,
              }}
            />
            <GatsbyImage
              className="problem__column-icon"
              image={rightColImg}
              alt={rightColumn.problemRightColumnIcon.altText}
            />
            <p className="problem__column-icon-text">
              <small>{rightColumn.problemRightColumnIconText}</small>
            </p>
          </div>
        </AnimationOnScroll>
      </div>
    </section>
  );
};

Problem.propTypes = {
  data: PropTypes.shape({
    problemSectionId: PropTypes.string,
    problemImage: PropTypes.shape({
      gatsbyImage: PropTypes.shape({}),
      altText: PropTypes.string,
    }),
    problemHeading: PropTypes.string,
    leftColumn: PropTypes.shape({
      problemLeftColumnHeading: PropTypes.string,
      problemLeftColumnCopy: PropTypes.string,
      problemLeftColumnIcon: PropTypes.shape({
        sourceUrl: PropTypes.string,
        altText: PropTypes.string,
      }),
      problemLeftColumnIconText: PropTypes.string,
    }),
    rightColumn: PropTypes.shape({
      problemRightColumnHeading: PropTypes.string,
      problemRightColumnCopy: PropTypes.string,
      problemRightColumnIcon: PropTypes.shape({
        sourceUrl: PropTypes.string,
        altText: PropTypes.string,
      }),
      problemRightColumnIconText: PropTypes.string,
    }),
  }).isRequired,
};

export default Problem;
