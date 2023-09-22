import React from 'react';
import ReactDOM from 'react-dom/client';
import App from "./app";
import {Provider} from "react-redux";
import {setupStore} from "./app/store/store";

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App/>
    </Provider>
);
