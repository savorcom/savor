import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

import SavorLogo from './logo';

const Header = ({ menuItems }) => {
  useEffect(() => {
    let scrollPos = window.scrollY;
    const header = document.querySelector('header');

    const addClassOnScroll = () => header.classList.add('header__background');
    const removeClassOnScroll = () =>
      header.classList.remove('header__background');

    window.addEventListener('scroll', () => {
      scrollPos = window.scrollY;

      if (
        scrollPos >= 280 ||
        document.body.classList.contains('ReactModal__Body--open')
      ) {
        addClassOnScroll();
      } else {
        removeClassOnScroll();
      }
    });
  }, []);

  return (
    <header className="header" role="banner">
      <div className="container">
        <AnchorLink className="header__logo-link" href="#savor">
          <h1 className="visuallyhidden">Savor</h1>
          <SavorLogo className="header__logo" />
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
