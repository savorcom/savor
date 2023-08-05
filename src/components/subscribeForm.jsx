import React from 'react';
import jsonp from 'jsonp';

import FormInput from './patterns/formInput';
import subscribeFormImage from '../images/subscribe-form-image.jpg';
import savorLogo from '../images/savor-logo-dark.svg';

const SubscribeForm = () => {
  const handleSubmit = (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const formJson = Object.fromEntries(formData.entries());
    const { fname, lname, email } = formJson;

    const url =
      'https://savor-it.us21.list-manage.com/subscribe/post-json?u=390af2b2c93642c3bc671994d&amp;id=789a6db0e3&amp;f_id=002c5be1f0';
    jsonp(
      `${url}&FNAME=${fname}&LNAME=${lname}&EMAIL=${email}`,
      { param: 'c' },
      (_, data) => {
        const { msg, result } = data;
        // do something with response
        console.log('result:', result);
        alert(msg);
      }
    );
  };

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
