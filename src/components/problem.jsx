import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const Problem = ({ data }) => {
  const { problemImage, problemHeading, leftColumn, rightColumn } = data;
  const problemImg = getImage(problemImage);
  return (
    <section className="problem">
      <GatsbyImage
        className="problem__image"
        image={problemImg}
        alt={problemImage.altText}
      />
      <h2>{problemHeading}</h2>
      <div className="problem__columns">
        <div className="problem__column">
          <h3 className="problem__column-heading">
            {leftColumn.problemLeftColumnHeading}
          </h3>
          <p
            className="problem__column-copy"
            dangerouslySetInnerHTML={{
              __html: leftColumn.problemLeftColumnCopy,
            }}
          />
          <img
            className="problem__column-icon"
            src={leftColumn.problemLeftColumnIcon.sourceUrl}
            alt={leftColumn.problemLeftColumnIcon.altText}
            loading="lazy"
            width="280"
            height="139"
            decoding="async"
          />
          <p className="problem__column-icon-text">
            {leftColumn.problemLeftColumnIconText}
          </p>
        </div>
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
          <img
            className="problem__column-icon"
            src={rightColumn.problemRightColumnIcon.sourceUrl}
            alt={rightColumn.problemRightColumnIcon.altText}
            loading="lazy"
            width="280"
            height="139"
            decoding="async"
          />
          <p className="problem__column-icon-text">
            {rightColumn.problemRightColumnIconText}
          </p>
        </div>
      </div>
    </section>
  );
};

Problem.propTypes = {
  data: PropTypes.shape({
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
