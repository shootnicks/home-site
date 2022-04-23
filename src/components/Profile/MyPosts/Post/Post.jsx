import s from './Post.module.css';

function Post(props) {
    return (
        <div className={s.item}>
            <img src={props.ava} />
            <div>
                <span className={s.user}>{props.user}</span> <span>{props.mess}</span>
            </div>
        </div >
    )
};

export default Post;