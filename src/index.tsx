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
    require('webpack-serve-overlay');

    if (module.hot) {
        // $FlowIgnore
        module.hot.accept('./App', () => {
            renderApp();
        });
    }
}
