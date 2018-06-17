// @flow
import React from 'react';
import app from './app.css';

function App() {
    const css = app.locals;

    app.use();

    return <p className={css.hello}>Hello World!</p>;
}

// Demo of working flow
function a(b: string): number {
    return b + '';
}

a('Hello');

export default App;
