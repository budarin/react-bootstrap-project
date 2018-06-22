import React from 'react';
import app from './app.css';

function App() {
    const css = app.locals;

    app.use();

    return <p className={css.hello}>Hello World!</p>;
}

function a(b: string): string {
    console.log('b = ', b);

    return b;
}

console.log('__DEV__', __DEV__);

if (__DEV__) {
    a('Hello');
}

export default App;
