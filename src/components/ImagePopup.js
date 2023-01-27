import React from "react";
function ImagePopup(props) {
  React.useEffect(() => {
    const handleEscClose = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    document.addEventListener("keydown", handleEscClose);
    return function removeListener() {
      document.removeEventListener("keydown", handleEscClose);
    };
  }, [props.card]);

  return (
    <div
      className={`popup popup_type_full-image ${
        props.card.link ? "popup_opened" : ""
      }`}
    >
      <div className="popup__image-container">
        <figure className="full-image">
          <img className="full-image__image" src={props.card.link} alt="" />
          <figcaption className="full-image__caption">
            {props.card.name}
          </figcaption>
        </figure>
        <button
          className="popup__close-icon"
          type="button"
          aria-label="Закрыть"
          onClick={props.onClose}
        ></button>
      </div>
    </div>
  );
}

export default ImagePopup;
