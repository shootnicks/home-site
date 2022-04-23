import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import usersReducer from "./user-reducer";
// import sidebarReducer from "./sidebar-reducer";

let reducers = combineReducers({
    Users: usersReducer,
    ProfilePage: profileReducer,
    DialogPage: dialogsReducer,
    // sidebar: sidebarReducer
});

let store = createStore(reducers);
export default store;