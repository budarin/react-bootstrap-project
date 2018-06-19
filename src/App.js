// @flow
import React from 'react';
import app from './app.css';

type CSS = {
    +hello: string,
};

function App() {
    const css: CSS = app.locals;

    app.use();

    return <p className={css.hello}>Hello World!</p>;
}

// Demo of working flow
function a(b: string): number {
    return b.length;
}

a('Hello');

export default App;
