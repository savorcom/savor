import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

const People = ({ data }) => {
  const {
    peopleHeading,
    peopleSubheading,
    peopleImage,
    peopleCopy,
    peoplePrincipals,
    peopleEmployees,
  } = data;
  const peopleImg = getImage(peopleImage);

  return (
    <section className="people">
      <h2 className="people__heading">{peopleHeading}</h2>
      <p className="people__subheading">{peopleSubheading}</p>
      <GatsbyImage
        className="people__image"
        image={peopleImg}
        alt={peopleImage.altText}
      />
      <p className="people__copy">{peopleCopy}</p>
      <ul className="people__list">
        {peoplePrincipals.map((item) => {
          const principalImg = getImage(item.peoplePrincipalImage);
          return (
            <li key={item.peoplePrincipalName} className="people__item">
              <GatsbyImage
                className="people__item-image"
                image={principalImg}
                alt={item.peoplePrincipalImage.altText}
              />
              <p className="people__item-name">{item.peoplePrincipalName}</p>
              <p className="people__item-title">{item.peoplePrincipalTitle}</p>
            </li>
          );
        })}
      </ul>
      <ul className="people__list">
        {peopleEmployees.map((item) => {
          const employeeImg = getImage(item.peopleEmployeeImage);
          return (
            <li key={item.peopleEmployeeName} className="people__item">
              <GatsbyImage
                className="people__item-image"
                image={employeeImg}
                alt={item.peopleEmployeeImage.altText}
              />
              <p className="people__item-name">{item.peopleEmployeeName}</p>
              <p className="people__item-title">{item.peopleEmployeeTitle}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

People.propTypes = {
  data: PropTypes.shape({
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
