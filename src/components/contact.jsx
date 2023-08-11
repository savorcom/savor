import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import SavorLogo from './logo';
import Dialog from './dialog';
import SubscribeForm from './subscribeForm';
import ContactForm from './contactForm';

const Contact = ({ data }) => {
  const [subscriptionModalIsOpen, setSubscriptionModalIsOpen] = useState(false);
  const [contactModalIsOpen, setContactModalIsOpen] = useState(false);

  const {
    contactColumnHeading1,
    contactColumnCopy1,
    contactColumnButtonText1,
    contactColumnHeading2,
    contactColumnCopy2,
    contactColumnButtonText2,
    contactSectionId,
  } = data;

  const handleSignUpClick = () => {
    setSubscriptionModalIsOpen(true);
  };

  const handleContactClick = () => {
    setContactModalIsOpen(true);
  };

  useEffect(() => {
    if (subscriptionModalIsOpen || contactModalIsOpen) {
      // When the modal is shown, we want a fixed body
      document.body.style.top = `-${window.pageYOffset}px`;
      document.body.style.position = 'fixed';
    } else {
      // When the modal is hidden, we want to remain at the top of the scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1);
    }
  }, [subscriptionModalIsOpen, contactModalIsOpen]);

  return (
    <Fragment>
      <section className="contact" id={contactSectionId}>
        <h2 className="visuallyhidden">Contact</h2>
        <div className="contact__columns">
          <div className="contact__column">
            <h3 className="contact__column-heading">{contactColumnHeading1}</h3>
            <p className="contact__column-copy">{contactColumnCopy1}</p>
            <button
              className="contact__button button button--secondary"
              type="button"
              onClick={handleSignUpClick}
            >
              {contactColumnButtonText1}
            </button>
          </div>

          <div className="contact__column">
            <SavorLogo className="contact__logo" />
          </div>

          <div className="contact__column">
            <div className="contact__column">
              <h3 className="contact__column-heading">
                {contactColumnHeading2}
              </h3>
              <p className="contact__column-copy">{contactColumnCopy2}</p>
              <button
                className="contact__button button button--secondary"
                type="button"
                onClick={handleContactClick}
              >
                {contactColumnButtonText2}
              </button>
            </div>
          </div>
        </div>
      </section>
      {subscriptionModalIsOpen && (
        <Dialog
          modalTitle="Subscribe to the Savor newsletter"
          modalIsOpen={subscriptionModalIsOpen}
          handleModalClose={() => setSubscriptionModalIsOpen(false)}
        >
          <SubscribeForm />
        </Dialog>
      )}
      {contactModalIsOpen && (
        <Dialog
          modalTitle="Contact us"
          modalIsOpen={contactModalIsOpen}
          handleModalClose={() => setContactModalIsOpen(false)}
        >
          <ContactForm />
        </Dialog>
      )}
    </Fragment>
  );
};

Contact.propTypes = {
  data: PropTypes.shape({
    contactSectionId: PropTypes.string,
    contactColumnHeading1: PropTypes.string,
    contactColumnButtonText1: PropTypes.string,
    contactColumnCopy1: PropTypes.string,
    contactColumnHeading2: PropTypes.string,
    contactColumnButtonText2: PropTypes.string,
    contactColumnCopy2: PropTypes.string,
    contactPhoneNumber: PropTypes.string,
    contactPhoneNumberLinkText: PropTypes.string,
  }).isRequired,
};

export default Contact;
