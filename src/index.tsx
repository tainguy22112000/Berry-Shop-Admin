// style + assets
import './assets/scss/style.scss';

import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
// third party
import { BrowserRouter } from 'react-router-dom';
// project imports
import * as serviceWorker from './serviceWorker';
import { store } from './store';
import config from './config';
import React from 'react';
import App from './App';

// ==============================|| REACT DOM RENDER  ||============================== //

const container = document.getElementById('root');
// @ts-ignore
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <Provider store={store}>
        <BrowserRouter basename={config.basename}>
            <App />
        </BrowserRouter>
    </Provider>
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
