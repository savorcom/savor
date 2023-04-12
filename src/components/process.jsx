/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

const Process = ({ data }) => {
  const { processHeading, processCopy, processColumns, processSectionId } =
    data;

  return (
    <section className="process" id={processSectionId}>
      <h2 className="process__heading">{processHeading}</h2>
      <div
        className="process__copy"
        dangerouslySetInnerHTML={{ __html: processCopy }}
      />
      <div className="process__columns">
        {processColumns.map((item, index) => {
          const processColIcon = getImage(item.processColumnIcon);

          return (
            <div key={item.processColumnCopy} className="process__column">
              <AnimationOnScroll
                animateIn="fadeInAndGrow"
                duration={2}
                delay={index * 250}
                animateOnce
              >
                <GatsbyImage
                  className="process__column-icon"
                  image={processColIcon}
                  alt={item.processColumnIcon.altText}
                />
              </AnimationOnScroll>
              <div
                className="process__column-copy"
                dangerouslySetInnerHTML={{ __html: item.processColumnCopy }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

Process.propTypes = {
  data: PropTypes.shape({
    processSectionId: PropTypes.string,
    processHeading: PropTypes.string,
    processCopy: PropTypes.string,
    processColumns: PropTypes.arrayOf(
      PropTypes.shape({
        processColumnIcon: PropTypes.shape({
          sourceUrl: PropTypes.string,
          altText: PropTypes.string,
        }),
        processColumnCopy: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Process;
