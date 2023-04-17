import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupUser(props){
    return(
        <PopupWithForm      
        // onSubmit={handleSubmit}
        name="profil"
        title="Редактировать профиль"
        isOpen={props.isOpen}
        textSafe="Сохранить"
        onClose={props.onClose}

        >
            <div className="popup__input-list">
              <input
                id="names-link"
                required
                // minlength="2"
                // maxlength="40"
                type="text"
                name="prof"
                className="popup__input-save popup__input-save_type_name"
                placeholder="Имя"
              />
              <span id="names-link-error" className="popup__input-error"></span>
            </div>
            <div className="popup__input-list">
              <input
                id="abouts-link"
                required
                // minlength="2"
                // maxlength="200"
                type="text"
                name="job"
                className="popup__input-save popup__input-save_type_about"
                placeholder="О себе"
              />
              <span id="abouts-link-error" className="popup__input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default PopupUser