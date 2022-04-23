export const ChangePostTextActionCreator = (PostText) => ({type: "CHANGE-POST-TEXT", PostText: PostText});
export const AddPostActionCreator = (UserID) => ({type: "ADD-POST", UserID: UserID});

let initialState = {
    Posts: [
        {
            UserID: 1,
            message: 'Я тут кое что придумал!!!'
        },
        {
            UserID: 2,
            message: 'Ну что опять!?'
        },
        {
            UserID: 3,
            message: 'Так, мама, давай выслушаем папу!'
        },
        {
            UserID: 5,
            message: 'Так... О чём речь?'
        }
    ],
    newPostText: ''
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-POST-TEXT':
            state.newPostText = action.PostText;
            return state
        case 'ADD-POST':
            let newPost = {
                UserID: action.UserID,
                message: state.newPostText
            }
            state.Posts.push(newPost);
            state.newPostText = '';
            return state
        default:
            return state
    }
}

export default profileReducer