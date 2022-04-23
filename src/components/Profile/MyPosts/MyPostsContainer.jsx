import Post from './Post/Post';
import React from "react";
import {AddPostActionCreator, ChangePostTextActionCreator} from "../../../Redux/profile-reducer";
import MyPosts from "./MyPosts";

function MyPostsContainer(props) {

    let editAnUnpublishMessage = (message) => {
        props.store.dispatch(ChangePostTextActionCreator(message))
    }

    let addPost = () => {
        props.store.dispatch(AddPostActionCreator(1)) //ID пользователя.
    }

    return <MyPosts editAnUnpublishMessage={editAnUnpublishMessage}
                    addPost={addPost}
                    ProfilePage={props.store.getState().ProfilePage}
                    Users={props.store.getState().Users}/>
}

export default MyPostsContainer;