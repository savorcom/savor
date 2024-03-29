/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

import { useWindowSize } from '../hooks/useWindowSize';

const People = ({ data }) => {
  const { peopleHeading, peopleSubheading, peopleEmployees, peopleSectionId } =
    data;
  const size = useWindowSize();
  const isSmallBreakpoint = size.width >= 480;
  const isMediumBreakpoint = size.width >= 768;

  return (
    <section className="people" id={peopleSectionId}>
      <h2 className="people__heading">{peopleHeading}</h2>
      <p className="people__subheading">{peopleSubheading}</p>
      <ul className="people__list">
        {peopleEmployees.map((item) => {
          const employeeImg = getImage(item.peopleEmployeeImage);
          return (
            <li
              key={item.peopleEmployeeName}
              className="people__item"
              style={{
                flexBasis: isMediumBreakpoint
                  ? `calc((100% / ${peopleEmployees.length}) - 4.5rem)`
                  : isSmallBreakpoint
                  ? 'calc(50% - 3rem)'
                  : '100%',
              }}
            >
              <div className="people__item-content-wrapper">
                <div className="people__item-image-wrapper">
                  <a href={item.peopleLinkedinLink}>
                    <GatsbyImage
                      className="people__item-image"
                      image={employeeImg}
                      alt={item.peopleEmployeeImage.altText}
                    />
                  </a>
                </div>
                <p className="people__item-name">
                  <a href={item.peopleLinkedinLink}>
                    {item.peopleEmployeeName}
                  </a>
                </p>
                <p className="people__item-title">{item.peopleEmployeeTitle}</p>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

People.propTypes = {
  data: PropTypes.shape({
    peopleSectionId: PropTypes.string,
    peopleHeading: PropTypes.string,
    peopleSubheading: PropTypes.string,
    peopleEmployees: PropTypes.arrayOf(
      PropTypes.shape({
        peopleEmployeeImage: PropTypes.shape({}),
        peopleEmployeeName: PropTypes.string,
        peopleEmployeeTitle: PropTypes.string,
        peopleLinkedinLink: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default People;
