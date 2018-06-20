import React from 'react';
import app from './app.css';

function App() {
    const css = app.locals;

    app.use();
    return <p className={css.hello}>Hello World!</p>;
}

function a(b) {
    return b.length;
}

a('Hello');

export default App;
