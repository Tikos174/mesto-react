import React from "react";

function ImagePopup(props) {
  return (
    <div
      className={`popup popup_image-window ${
        props.isOpen ? "popup_display-open" : ""
      }`}
    >
      <div className="popup__profil">
        <button
          type="button"
          onClick={props.onClose}
          className="popup__close popup__closeImg"
        ></button>
        <img alt={props.card.name} className="popup__image" src={props.card.link} />
        <p className="popup__text-profil">{props.card.name}</p>
      </div>
    </div>
  );
}

export default ImagePopup;
