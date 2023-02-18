import React from 'react';
import PropTypes from 'prop-types';
import AnchorLink from 'react-anchor-link-smooth-scroll-v2';

import savorLogo from '../images/savor-logo.svg';

const Header = ({ menuItems }) => (
  <header className="header" role="banner">
    <div className="container">
      <img className="header__logo" src={savorLogo} alt="Savor logo" />

      <nav className="header__nav">
        <ul className="nav__list">
          {menuItems.map((item) => (
            <li className="nav__item" key={item.label}>
              <AnchorLink className="nav__link" href={item.path} offset="24">
                {item.label}
              </AnchorLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Header;
