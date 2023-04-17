import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupAddCard from "./PopupAddCard";
import PopupUser from "./PopupUser";
import PopupAddAvatar from "./PopupAddAvatar";
import ImagePopup from "./ImagePopup";

function App() {
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
  }

  return (
    <body className="body">
      <div className="page">
        <Header />
        <Main
          onAddPlace={handleAddPlaceClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onImage={handleCardClick}
          Card
        />
        <Footer />
        <PopupAddCard isOpen={isAddPopupOpen} onClose={closeAllPopups} />
        <PopupUser isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} />
        <PopupAddAvatar isOpen={isAvatarPopupOpen} onClose={closeAllPopups} />
        <ImagePopup
          isOpen={isImagePopupOpen}
          card={selectedCard}
          onClose={closeAllPopups}
        />
      </div>
    </body>
  );
}

export default App;
