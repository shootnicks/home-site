import s from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
import React from "react";

function GetUserData(Users, Element) {
    let UserData = Users.find(u => u.ID === Element.UserID)
    return UserData
}

function Dialogs(props) {

    let dialogsElem = props.DialogPage.Dialo.map( d => (<DialogItem id={d.DialogID} name={GetUserData(props.Users, d).Name} Ava={GetUserData(props.Users, d).Ava}/>));
    let MessagesElem = props.DialogPage.Messa.map( m => (<Message ID={GetUserData(props.Users, m).ID} name={GetUserData(props.Users, m).Name} texts={m.message} Ava={GetUserData(props.Users, m).Ava}/>));

    let areaForNewMessages = React.createRef();

    let editAnUnpublishedMessage = () => {
        return props.editAnUnpublishedMessage(areaForNewMessages.current.value)
    }

    let publicNewMessages = () => {
        props.publicNewMessages()
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItem}>
                { dialogsElem }
            </div>
            <div className={s.messages}>
                { MessagesElem }
                <textarea placeholder="Введите свой текст..." ref={areaForNewMessages} value={props.DialogPage.newDialogText} onChange={editAnUnpublishedMessage} />
                <button onClick={props.publicNewMessages}>Бла</button>
            </div>
        </div>
    )
}

export default Dialogs;