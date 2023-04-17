import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddCard(props) {
    return(
        <PopupWithForm      
        name="add"
        title="Новое место"
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
                name="name"
                className="popup__input-save popup__input-save_type_nameNew"
                placeholder="Название"
              />
              <span id="names-link-error" className="popup__input-error"></span>
            </div>
            <div className="popup__input-list">
              <input

                id="abouts-link"
                required
                type="url"
                name="link"
                className="popup__input-save popup__input-save_type_aboutNew"
                placeholder="Сcылка на картинку"
              />
              <span id="abouts-link-error" className="popup__input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default PopupAddCard