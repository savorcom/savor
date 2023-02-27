import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

import savorLogo from '../images/savor-logo.svg';

const Header = ({ menuItems }) => {
  useEffect(() => {
    let scrollPos = window.scrollY;
    const header = document.querySelector('header');
    // const headerHeight = header.offsetHeight;

    const addClassOnScroll = () => header.classList.add('header__background');
    const removeClassOnScroll = () =>
      header.classList.remove('header__background');

    window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;

      if (scrollPos >= 1) {
        addClassOnScroll();
      } else {
        removeClassOnScroll();
      }
    });
  }, []);

  return (
    <header className="header" role="banner">
      <div className="container">
        <AnchorLink className="header__logo-link" href="/">
          <img className="header__logo" src={savorLogo} alt="Savor logo" />
        </AnchorLink>

        <nav className="nav">
          <ul className="nav__list">
            {menuItems.map((item) => (
              <li className="nav__item" key={item.label}>
                <AnchorLink className="nav__link" href={item.path} offset="108">
                  {item.label}
                </AnchorLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
