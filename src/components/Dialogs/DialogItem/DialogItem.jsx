import s from './../Dialogs.module.css'
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={'/dialogs/' + props.id}><img src={props.Ava} className={s.AvaSmall}/>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;