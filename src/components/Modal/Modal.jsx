import PropTypes from 'prop-types';

export const Modal = ({ largeImageURL, alt, closeModal }) => {
  document.addEventListener('keydown', closeModal);

  return (
    <div className="Overlay" onClick={evt => closeModal(evt)}>
      <div className="Modal">
        <img src={largeImageURL} alt={alt} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  closeModal: PropTypes.func.isRequired,
};
