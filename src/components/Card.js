import React from "react";

function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return (
    <li className="element__list">
      <button type="button" className="element__delite"></button>
      <img
        alt={props.card.name}
        className="element__image"
        onClick={handleClick}
        src={props.card.link}
      />
      <div className="element__block-text">
        <h2 className="element__text">{props.card.name}</h2>
        <div className="element__position-like">
          <button type="button" className="element__like"></button>
          <span className="element__counter-like">0</span>
        </div>
      </div>
    </li>
  );
}

export default Card;
