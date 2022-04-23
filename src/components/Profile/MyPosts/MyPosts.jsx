import s from './MyPosts.module.css';
import React from "react";
import Post from "./Post/Post";

let newPostElement = React.createRef();

function GetUserData(Users, Posts) {
    let UserData = Users.find(u => u.ID === Posts.UserID)
    return (UserData)
}

function MyPosts(props) {

    let editAnUnpublishMessage = () => {
        let message = newPostElement.current.value;
        props.editAnUnpublishMessage(message);
    }

    let addPost = () => {
        props.addPost();
    }

    let usersMessage = props.ProfilePage.Posts.map(p => (
        <Post user={GetUserData(props.Users, p).Name} mess={p.message} ava={GetUserData(props.Users, p).Ava}/>))

    return (
        <div className={s.descriptionBlock}>
            <h3>My post</h3>
            <div>
                New post
                <div>
                    <div>
                        <input placeholder="Введите свой текст..." ref={newPostElement} value={props.ProfilePage.newPostText} onChange={editAnUnpublishMessage} />
                    </div>
                    <div>
                        <button onClick={addPost}>Add post</button>
                    </div>
                </div>
            </div>
            <div>
                {usersMessage}
            </div>
        </div>
    )
}

export default MyPosts;