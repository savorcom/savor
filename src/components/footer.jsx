import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="container">
        <span>Savor &copy; {currentYear}</span>
        <ul className="footer__links-list">
          <li className="footer__links-item">
            <a
              href="https://www.iubenda.com/privacy-policy/34710471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy
            </a>
          </li>
          <li className="footer__links-item">
            <a
              href="https://www.iubenda.com/terms-and-conditions/34710471"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms
            </a>
          </li>
          <li className="footer__links-item">
            <a href="mailto:hello@savor-it.com">hello@savor-it.com</a>
          </li>
          <li className="footer__links-item">
            <a href="tel:18887286798">(888) SAVOR-98</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

Footer.propTypes = {};

Footer.defaultProps = {};

export default Footer;
