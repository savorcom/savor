import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/main.scss';
import 'animate.css/animate.min.css';

import HeroVideo from './heroVideo';
import Header from './header';
import Drip from './drip';

const Layout = ({ children, menuItems, videoUrl }) => (
  <Fragment>
    <Helmet
      bodyAttributes={{
        id: 'savor',
      }}
    />
    <a className="skip-link" href="#main">
      skip to main content
    </a>
    <HeroVideo videoUrl={videoUrl} />
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
  videoUrl: PropTypes.string.isRequired,
};

export default Layout;
