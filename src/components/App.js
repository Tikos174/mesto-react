import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupAddCard from "./PopupAddCard";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import api from "../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
// import PopupDeleteCard from "./PopupDeleteCard";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api
      .getinfoProfil()
      .then((data) => {
        setCurrentUser(data);
      })
      .catch((err) => console.log(err));

    api
      .getInitialCards()
      .then((data) => {
        setCards(data);
      })
      .catch((err) => console.log(err));
  }, []);

  function handleCardLike(card) {
    // Снова проверяем, есть ли уже лайк на этой карточке
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    if (!isLiked) {
      api.addLike(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
    } else {
      api.deleteLike(card._id, !isLiked)
      .then((newCard) => {
      setCards((state) => state.map((c) => (c._id === card._id ? newCard : c)));
    });
    }
  }

  //Попап добавление карточки
  const [isAddPopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPopupOpen);
  }

  //Попап профиля
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] =
    React.useState(false);
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }

  //   //Попап удаления
  //   const [isEditDeletePopupCard, setIsEditDeletePopupCard] =
  //   React.useState(false);
  // function handleEditOpenDeleteCard() {
  //   console.log('123')
  //   setIsEditDeletePopupCard(!isEditDeletePopupCard);
  // }

  //Попап аватара
  const [isAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isAvatarPopupOpen);
  }

  //Попап картинки карточки
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleCardClick(card) {
    setIsImagePopupOpen(!isImagePopupOpen);
    setSelectedCard(card);
  }

  //Закрытие Попап
  function closeAllPopups() {
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
    // setIsEditDeletePopupCard(false)
  }

  function handleUpdateUser(data) {
    api
      .patchProfil(data)
      .then((data) => {
        setCurrentUser(data.name, data.about);
      })
      .catch((err) => console.log(err));
      closeAllPopups()
  }

  function handleUpdateAvatar(data) {
    api
      .editProfilAvatar(data)
      .then((data) => {
        setCurrentUser(data.avatar);
      })
      .catch((err) => console.log(err));
      closeAllPopups()
  }

  function handleAddPlaceSubmit(data) {
    api
      .addCard(data)
      .then((newCard) => {
        setCards([newCard, ...cards]);
      })
      .catch((err) => console.log(err));
      closeAllPopups()
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="body">
      <div className="page">
        <CurrentUserContext.Provider value={currentUser}>
          <Header />
          <Main
            onAddPlace={handleAddPlaceClick}
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onImage={handleCardClick}
            onCardLike={handleCardLike}
            cards={cards}
            onCardDelete={handleCardDelete} 
          />
          <Footer />
          <PopupAddCard
            isOpen={isAddPopupOpen}
            onClose={closeAllPopups}
            onAddPlace={handleAddPlaceSubmit}
          />

          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />

          <EditAvatarPopup
            isOpen={isAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />

          <ImagePopup
            isOpen={isImagePopupOpen}
            card={selectedCard}
            onClose={closeAllPopups}
          />

          {/* <PopupDeleteCard
            isOpen={isEditDeletePopupCard}
            onEditDeleteCard={handleEditProfileClick}
            // onClose={closeAllPopups}
            onDeleteCard={handleEditOpenDeleteCard}
          /> */}
        </CurrentUserContext.Provider>
      </div>
    </div>
  );
}

export default App;
