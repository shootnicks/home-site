export const ChangeDialogTextActionCreator = (DialogMessage) => ({type: "CHANGE-DIALOG-TEXT", DialogMessage: DialogMessage});
export const AddMessageActionCreator = (UserID) => ({type: "ADD-MESSAGE", UserID: UserID});

let initialState = {
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

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CHANGE-DIALOG-TEXT':
            state.newDialogText = action.DialogMessage;
            return state
        case 'ADD-MESSAGE':
            let newMessage = {
                UserID: action.UserID,
                message: state.newDialogText
            }
            state.Messa.push(newMessage);
            state.newDialogText = '';
            return state
        default:
            return state
    }
}

export default dialogsReducer