import React from "react";
import PopupWithForm from "./PopupWithForm";

function PopupAddAvatar(props) {
    return(
        <PopupWithForm      
        name="avatar"
        title="Обновить аватар"
        isOpen={props.isOpen}
        textSafe="Сохранить"
        onClose={props.onClose}
        >
            <div className="popup__input-list">
              <input
                id="avatar-link"
                required
                // minlength="2"
                // maxlength="40"
                type="url"
                name="avatar"
                className="popup__input-save popup__input-save_type_nameNew"
                placeholder="Сcылка на аватар"
              />
              <span id="avatar-link-error" class="popup__input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default PopupAddAvatar