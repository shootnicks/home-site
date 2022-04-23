import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/redux-store";
import {createRoot} from 'react-dom/client';
import {Provider} from "react-redux";

const container = document.getElementById('root');
const root = createRoot(container);

let rerenderEntireTree = (state) => {
    root.render(<App state={state} store={store}/>);
}

rerenderEntireTree(store.getState());

store.subscribe(() => {
    <Provider store={store}>
        rerenderEntireTree(store.getState())
    </Provider>
});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// let rerenderEntireTree = (state) => {
//     ReactDOM.render(
//         <React.StrictMode>
//             <App state={state} store={store} Users={Users}/>
//         </React.StrictMode>,
//         document.getElementById('root')
//     );
// }