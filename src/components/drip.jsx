import React, { useEffect } from 'react';

import drip from '../images/header-drip.png';

const Drip = () => {
  useEffect(() => {
    let scrollPos = window.scrollY;
    const header = document.getElementById('drip');

    const addSlideUpOnScroll = () => header.classList.add('slideUp');
    const addSlideDownOnScroll = () => header.classList.add('slideDown');
    const removeSlideUpOnScroll = () => header.classList.remove('slideUp');
    const removeSlideDownOnScroll = () => header.classList.remove('slideDown');
    const removeDripInitial = () => header.classList.remove('drip--initial');

    window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;

      if (scrollPos >= 1) {
        removeDripInitial();
        removeSlideDownOnScroll();
        addSlideUpOnScroll();
      } else {
        removeSlideUpOnScroll();
        addSlideDownOnScroll();
      }
    });
  }, []);

  return <img id="drip" className="drip drip--initial" src={drip} alt="" />;
};

export default Drip;
