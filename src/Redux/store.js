import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
//import sidebarReducer from "./sidebar-reducer";

export let store = {
    _state: {
        Users: [
                {
                    ID: 1,
                    Name: 'Павел',
                    Ava: 'https://cdn.iconscout.com/icon/free/png-256/avatar-370-456322.png'
                },
                {
                    ID: 2,
                    Name: 'Лейсан',
                    Ava: 'https://media.istockphoto.com/vectors/avatar-icon-of-girl-in-a-baseball-cap-vector-id542940830?k=20&m=542940830&s=170667a&w=0&h=se4mS6kwTS4RlEoaqK2H3Z0nEdqIPia7C-BtiCZ_Ays='
                },
                {
                    ID: 3,
                    Name: 'Александр',
                    Ava: 'https://image.shutterstock.com/image-vector/cartoon-boy-smiling-icon-over-260nw-1735839146.jpg'
                },
                {
                    ID: 4,
                    Name: 'Димас',
                    Ava: 'https://home.shootnick.keenetic.name/pasha/dima.png'
                },
                {
                    ID: 5,
                    Name: 'Ольга',
                    Ava: 'https://home.shootnick.keenetic.name/pasha/olga.png'
                },
            ],
        ProfilePage:
            {
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
            },
        DialogPage:
            {
                Dialo: [
                    {DialogID: 1, UserID: 1},
                    {DialogID: 2, UserID: 2},
                    {DialogID: 3, UserID: 3},
                    {DialogID: 4, UserID: 4},
                    {DialogID: 5, UserID: 5}
                ],
                Messa: [
                    {UserID: 1, message: 'Hi'},
                    {UserID: 4, message: 'Hello'},
                    {UserID: 1, message: 'How are you?'},
                    {UserID: 4, message: 'Fine, thanks!!!'},
                    {UserID: 2, message: "I' too!"},
                    {UserID: 3, message: "I'm too fine!"}
                ],
                newDialogText: '',
            }

    },
    _callSubscriber() {
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    getState() {
        return this._state
    },
    Dispatch(action) {
        this._state.ProfilePage = profileReducer(this._state.ProfilePage, action);
        this._state.DialogPage = dialogsReducer(this._state.DialogPage, action);
        // this._state.ProfilePage = sidebarReducer(this._state.ProfilePage, action);
        this._callSubscriber(this.getState());
    }
}

export default store