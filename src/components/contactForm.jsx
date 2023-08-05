import React from 'react';
import jsonp from 'jsonp';

import FormInput from './patterns/formInput';
import subscribeFormImage from '../images/subscribe-form-image.jpg';
import savorLogo from '../images/savor-logo-dark.svg';

const ContactForm = () => {
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
        <p className="pop-up-form__copy">Want to get in touch?</p>
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
