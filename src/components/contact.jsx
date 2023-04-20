import React from 'react';
import PropTypes from 'prop-types';

import SavorLogo from './logo';

const Contact = ({ data }) => {
  const {
    contactColumnHeading,
    contactColumnCopy,
    contactColumnButtonText,
    contactSectionId,
  } = data;

  return (
    <section className="contact" id={contactSectionId}>
      <h2 className="visuallyhidden">Contact</h2>
      <div className="contact__columns">
        <div className="contact__column">
          <SavorLogo className="contact__logo" />
        </div>

        <div className="contact__column">
          <h3 className="contact__column-heading">{contactColumnHeading}</h3>
          <p className="contact__column-copy">{contactColumnCopy}</p>
          <a
            className="contact__button button button--secondary"
            href={`mailto:${contactColumnButtonText}`}
          >
            {contactColumnButtonText}
          </a>
        </div>
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    contactSectionId: PropTypes.string,
    contactColumnHeading: PropTypes.string,
    contactColumnButtonText: PropTypes.string,
    contactColumnCopy: PropTypes.string,
  }).isRequired,
};

export default Contact;
