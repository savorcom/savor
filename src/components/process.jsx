/* eslint-disable react/no-danger */
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import arrows from '../images/arrows.svg';

const Process = ({ data }) => {
  const {
    processHeaderBlock,
    processHeading,
    processCopy,
    processColumns,
    processSectionId,
  } = data;
  const processHeaderImg = getImage(processHeaderBlock.processHeaderBlockImage);

  return (
    <section className="process" id={processSectionId}>
      <div className="process__header-block">
        <div
          className="process__header-block-copy"
          dangerouslySetInnerHTML={{
            __html: processHeaderBlock.processHeaderBlockCopy,
          }}
        />
        <div className="process__header-block-image-wrapper">
          <GatsbyImage
            className="process__header-block-image"
            image={processHeaderImg}
            alt={processHeaderBlock.processHeaderBlockImage.altText}
          />
        </div>
        <img
          className="process__header-block-arrows"
          src={arrows}
          alt=""
          width="48"
          height="108"
          aria-hidden="true"
        />
      </div>
      <h2 className="process__heading">{processHeading}</h2>
      <div
        className="process__copy"
        dangerouslySetInnerHTML={{ __html: processCopy }}
      />
      <div className="process__columns">
        {processColumns.map((item) => {
          const processColIcon = getImage(item.processColumnIcon);

          return (
            <div key={item.processColumnCopy} className="process__column">
              <GatsbyImage
                className="process__column-icon"
                image={processColIcon}
                alt={item.processColumnIcon.altText}
              />
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
    processHeaderBlock: PropTypes.shape({
      processHeaderBlockCopy: PropTypes.string,
      processHeaderBlockImage: PropTypes.shape({
        gatsbyImage: PropTypes.shape({}),
        altText: PropTypes.string,
      }),
    }),
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
