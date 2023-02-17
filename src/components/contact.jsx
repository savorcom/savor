import React from 'react';
import PropTypes from 'prop-types';

const Contact = ({ data }) => {
  const { columns } = data;
  return (
    <section className="contact">
      <h2 className="visuallyhidden">Contact</h2>
      <div className="contact__columns">
        {columns.map((item) => (
          <div key={item.contactColumnHeading} className="contact__column">
            <h3 className="contact__column-heading">
              {item.contactColumnHeading}
            </h3>
            <div
              className="contact__column-copy"
              dangerouslySetInnerHTML={{ __html: item.contactColumnCopy }}
            />
            <a href="/">{item.contactColumnButtonText}</a>
          </div>
        ))}
      </div>
    </section>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    columns: PropTypes.arrayOf(
      PropTypes.shape({
        contactColumnHeading: PropTypes.string,
        contactColumnCopy: PropTypes.string,
        contactColumnButtonText: PropTypes.string,
      })
    ),
  }).isRequired,
};

export default Contact;
