import './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

function Profile(props) {
    return (
        <div>
            <div>
                <img src='https://www.coca-cola.ru/content/dam/one/ru/ru/2021/05/novorossiysk/0-cola-zahod-novorossiysk-1020.jpg' />
            </div>
            <ProfileInfo />
            <MyPostsContainer store={props.store} />
        </div>
    )
};

export default Profile;