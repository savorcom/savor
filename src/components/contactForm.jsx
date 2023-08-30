import React, { useState } from 'react';
import jsonp from 'jsonp';

import FormInput from './patterns/formInput';
import contactFormImage from '../images/contact-form-image.jpg';
import savorLogo from '../images/savor-logo-dark.svg';

const ContactForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { fname, lname, email, message } = formJson;

    const url =
      'https://savor-it.us21.list-manage.com/subscribe/post-json?u=390af2b2c93642c3bc671994d&amp;id=789a6db0e3&amp;f_id=002c5be1f0';

    jsonp(
      `${url}&FNAME=${fname}&LNAME=${lname}&EMAIL=${email}&MMERGE6=${message}`,
      { param: 'c' },
      (_, data) => {
        const { result } = data;

        if (result === 'success') {
          setSubmitSuccess(true);
        }
      }
    );
  };

  if (submitSuccess) {
    return (
      <div className="pop-up-form">
        <div className="pop-up-form__image-container">
          <img
            className="pop-up-form__image"
            src={contactFormImage}
            alt="a fresh stack of pancakes with a melting pat of butter on top"
            decoding="async"
          />
        </div>
        <div className="pop-up-form__form-container">
          <img
            className="pop-up-form__logo"
            src={savorLogo}
            alt="Savor logo"
            width="160"
            height="46"
            decoding="async"
          />
          <p className="pop-up-form__copy pop-up-form__copy--success">
            Thank you for getting in touch! You&apos;ll be hearing from us soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pop-up-form">
      <div className="pop-up-form__image-container">
        <img
          className="pop-up-form__image"
          src={contactFormImage}
          alt="a fresh stack of pancakes with a melting pat of butter on top"
          decoding="async"
        />
      </div>
      <div className="pop-up-form__form-container">
        <img
          className="pop-up-form__logo"
          src={savorLogo}
          alt="Savor logo"
          width="160"
          height="46"
          decoding="async"
        />
        <p className="pop-up-form__copy">
          Reach out if you&apos;re making better food & you need a better fat.
        </p>
        <form className="pop-up-form__form" onSubmit={handleSubmit}>
          <div className="pop-up-form__two-col">
            <FormInput id="fname" name="FNAME" label="First Name" />
            <FormInput id="lname" name="LNAME" label="Last Name" />
          </div>
          <FormInput id="email" type="email" name="Email" label="Email" />
          <FormInput
            id="message"
            type="textarea"
            name="MESSAGE"
            label="Message"
          />
          <button className="pop-up-form__button" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
