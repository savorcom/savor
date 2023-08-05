import React from 'react';
import PropTypes from 'prop-types';
import Modal from 'react-modal';

import iconClose from '../images/icon-close.svg';

Modal.setAppElement(`#___gatsby`);

const Dialog = ({ children, modalIsOpen, handleModalClose, modalTitle }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={handleModalClose}
    contentLabel={modalTitle}
    className="modal__container"
    overlayClassName="modal__backdrop"
    shouldCloseOnOverlayClick
  >
    <button
      className="modal__close"
      type="button"
      onClick={handleModalClose}
      aria-label="close modal"
    >
      <span className="visuallyhidden">close</span>
      <img src={iconClose} alt="" />
    </button>
    <div className="modal__content">{children}</div>
  </Modal>
);

Dialog.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  handleModalClose: PropTypes.func.isRequired,
  modalIsOpen: PropTypes.bool.isRequired,
  modalTitle: PropTypes.string.isRequired,
};

export default Dialog;
