// @flow
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

function renderApp() {
    const app = document.getElementById('app');

    app && ReactDOM.render(<App />, app);
}

renderApp();

if (process.env.NODE_ENV === 'development') {
    // $FlowIgnore
    module.hot.accept('./App', () => {
        renderApp();
    });
}
