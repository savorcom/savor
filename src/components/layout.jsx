import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

import '../styles/main.scss';

import Header from './header';
import Drip from './drip';

const Layout = ({ children, menuItems }) => (
  <Fragment>
    <a className="skip-link" href="#main">
      skip to main content
    </a>
    <Drip />
    <Header menuItems={menuItems} />
    <main className="main" id="main" role="main">
      {children}
    </main>
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Layout;
