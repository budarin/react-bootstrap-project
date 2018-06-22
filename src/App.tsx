import React from 'react';
import app from './app.css';

function App() {
    const css = app.locals;

    app.use();

    return <p className={css.hello}>Hello World!</p>;
}

function a(b: string): string {
    console.log('b = ', b); // tslint:disable-line

    return b;
}

if (__DEV__) {
    a('Hello');
}

export default App;
