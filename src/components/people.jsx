/* eslint-disable no-nested-ternary */
import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { AnimationOnScroll } from 'react-animation-on-scroll';

import { useWindowSize } from '../hooks/useWindowSize';

const People = ({ data }) => {
  const {
    peopleHeading,
    peopleSubheading,
    peopleImage,
    peopleCopy,
    peoplePrincipals,
    peopleEmployees,
    peopleSectionId,
  } = data;
  const peopleImg = getImage(peopleImage);

  const size = useWindowSize();
  const isSmallBreakpoint = size.width >= 480;
  const isMediumBreakpoint = size.width >= 768;

  return (
    <section className="people" id={peopleSectionId}>
      <h2 className="people__heading">{peopleHeading}</h2>
      <p className="people__subheading">{peopleSubheading}</p>
      <GatsbyImage
        className="people__image"
        image={peopleImg}
        alt={peopleImage.altText}
      />
      <p className="people__copy">{peopleCopy}</p>
      <ul className="people__list">
        {peoplePrincipals.map((item, index) => {
          const principalImg = getImage(item.peoplePrincipalImage);
          return (
            <li key={item.peoplePrincipalName} className="people__item">
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                duration={1.25}
                delay={index * 250}
                animateOnce
              >
                <div className="people__item-image-wrapper">
                  <GatsbyImage
                    className="people__item-image"
                    image={principalImg}
                    alt={item.peoplePrincipalImage.altText}
                  />
                </div>
                <p className="people__item-name">{item.peoplePrincipalName}</p>
                <div
                  className="people__item-title"
                  dangerouslySetInnerHTML={{
                    __html: item.peoplePrincipalTitle,
                  }}
                />
              </AnimationOnScroll>
            </li>
          );
        })}
      </ul>
      <ul className="people__list">
        {peopleEmployees.map((item, index) => {
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
              <AnimationOnScroll
                animateIn="animate__fadeIn"
                duration={1.5}
                delay={peoplePrincipals.length * 250 + index * 250}
                animateOnce
                className="people__item-content-wrapper"
              >
                <div className="people__item-image-wrapper">
                  <GatsbyImage
                    className="people__item-image"
                    image={employeeImg}
                    alt={item.peopleEmployeeImage.altText}
                  />
                </div>
                <p className="people__item-name">{item.peopleEmployeeName}</p>
                <div
                  className="people__item-title"
                  dangerouslySetInnerHTML={{ __html: item.peopleEmployeeTitle }}
                />
              </AnimationOnScroll>
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
    peopleImage: PropTypes.shape({
      altText: PropTypes.string,
    }),
    peopleCopy: PropTypes.string,
    peoplePrincipals: PropTypes.arrayOf(
      PropTypes.shape({
        principalImage: PropTypes.shape({}),
        principalName: PropTypes.string,
        principalTitle: PropTypes.string,
      })
    ),
    peopleEmployees: PropTypes.arrayOf(
      PropTypes.shape({
        employeeImage: PropTypes.shape({}),
        employeeName: PropTypes.string,
        employeeTitle: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default People;
