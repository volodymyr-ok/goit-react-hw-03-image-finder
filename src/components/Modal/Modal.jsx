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
