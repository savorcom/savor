import React, { useState } from 'react';
import jsonp from 'jsonp';

import FormInput from './patterns/formInput';
import subscribeFormImage from '../images/subscribe-form-image.jpg';
import savorLogo from '../images/savor-logo-dark.svg';

const SubscribeForm = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { fname, lname, email } = formJson;

    const url = process.env.MAILCHIMP_URL;
    jsonp(
      `${url}&FNAME=${fname}&LNAME=${lname}&EMAIL=${email}`,
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
            src={subscribeFormImage}
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
            Thank you for subscribing to Savor updates! You&apos;ll be hearing
            from us soon.
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
          src={subscribeFormImage}
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
          Sign up to receive updates and news from Savor.
        </p>
        <form
          className="pop-up-form__form"
          onSubmit={handleSubmit}
          method="post"
        >
          <FormInput
            id="fname"
            name="FNAME"
            label="First Name"
            labelClass="visuallyhidden"
            placeholder="First Name"
          />
          <FormInput
            id="lname"
            name="LNAME"
            label="Last Name"
            labelClass="visuallyhidden"
            placeholder="Last Name"
          />
          <FormInput
            id="email"
            type="email"
            name="Email"
            label="Email"
            labelClass="visuallyhidden"
            placeholder="Email"
          />
          <button className="pop-up-form__button" type="submit">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default SubscribeForm;
