import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import '../styles/main.scss';
import 'animate.css/animate.min.css';

import HeroImage from './heroImage';
import Header from './header';
import Drip from './drip';
import Footer from './footer';

const Layout = ({ children, heroImage, menuItems }) => (
  <Fragment>
    <Helmet
      bodyAttributes={{
        id: 'savor',
      }}
    />
    <a className="skip-link" href="#main">
      skip to main content
    </a>
    <HeroImage heroImage={heroImage} />
    <Drip />
    <Header menuItems={menuItems} />
    <main className="main" id="main" role="main">
      {children}
    </main>
    <Footer />
  </Fragment>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  heroImage: PropTypes.shape({}).isRequired,
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      path: PropTypes.string,
    })
  ).isRequired,
};

export default Layout;
