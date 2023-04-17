import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState();
  const [userDescription, setUserDescription] = React.useState();
  const [userAvatar, setUserAvatar] = React.useState();

  React.useEffect(() => {
    api.getinfoProfil()
    .then((data) => {
      setUserName(data.name);
      setUserDescription(data.about);
      setUserAvatar(data.avatar)
    });

    api.getInitialCards().then((data) => {
      setCards(data)
    });
  });

  const [cards, setCards] = React.useState([]);

  return (
    <main className="main">
      <section className="profile">
        <div className="profile__blocks">
          <div className="profile__avatar">
            <img
              className="profile__img"
              src={userAvatar}
              onClick={props.onEditAvatar}
              alt="Логотип"
            />
          </div>
          <div className="profile__info">
            <div className="profile__info-block">
              <h1 className="profile__name">{userName}</h1>
              <button
                type="button"
                className="profile__button openPopUp"
                onClick={props.onEditProfile}
              ></button>
            </div>
            <p className="profile__text">{userDescription}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={props.onAddPlace}
          className="profile__button-add openPopUp"
        ></button>
      </section>
      <section className="elements">
        <ul className="element">
          {cards.map((card) => (
            <Card card={card} onCardClick={props.onImage} />
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;
