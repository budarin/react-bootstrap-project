import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function renderApp() {
    const app = document.getElementById('app');

    if (app) {
        ReactDOM.render(<App />, app);
    }
}

renderApp();
