import React from 'react';
import app from './app.css';

function App() {
    const css = app.locals;

    app.use();

    return <p className={css.hello}>Hello World!</p>;
}

function a(b: string): string {
    // tslint:disable-next-line
    console.log('b = ', b);

    return b;
}

if (__DEV__) {
    a('Hello');
}

export default App;
