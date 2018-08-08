import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function renderApp() {
    const app = document.getElementById('root');

    if (app) {
        ReactDOM.render(<App />, app);
    }
}

renderApp();

if (__DEV__) {
    require('webpack-serve-overlay'); // tslint:disable-line

    if (module.hot) {
        module.hot.accept('./App', () => {
            renderApp();
        });
    }
}
