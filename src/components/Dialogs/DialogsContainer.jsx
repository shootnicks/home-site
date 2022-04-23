import React from "react";
import {AddMessageActionCreator, ChangeDialogTextActionCreator} from "../../Redux/dialogs-reducer";
import Dialogs from "./Dialogs";

function DialogsContainer(props) {
    let state = props.store.getState();

    let editAnUnpublishedMessage = (tempMessage) => {
        props.store.dispatch(ChangeDialogTextActionCreator(tempMessage))
    }

    let publicNewMessages = () => {
        props.store.dispatch(AddMessageActionCreator(1))  // 1 - номер пользователя передаём.
    };

    return (
        <Dialogs editAnUnpublishedMessage={editAnUnpublishedMessage}
                 publicNewMessages={publicNewMessages}
                 DialogPage={state.DialogPage}
                 Users={state.Users}
        />
    )
}

export default DialogsContainer;