import * as React from 'react';

import app from './app.css';

class App extends React.Component {
    public render() {
        const css = app.locals;

        app.use();

        return <p className={css.hello}>Hello World!</p>;
    }
}

function a(b: string): string {
    console.log('b = ', b); // tslint:disable-line

    return b;
}

if (__DEV__) {
    a('Hello!');
}

export default App;
