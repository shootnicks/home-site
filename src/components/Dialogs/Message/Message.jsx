import s from './Message.module.css'

function Message(props) {
    return(
        <div className={s.message}>
            {props.ID == 1 ?
                (<div className={s.messageL}><img src={props.Ava} className={s.AvaSmall}/> {props.texts}</div>) :
                (<div className={s.messageR}>{props.texts} <img src={props.Ava} className={s.AvaSmall}/></div>)
            }
        </div>

    )
}

export default Message;