import * as React from 'react';

import app from './app.css';

interface IProps {
    greet?: string;
}

class App extends React.Component<IProps> {
    public static defaultProps: IProps = {
        greet: 'Hi!',
    };

    public render() {
        const css = app.locals;

        if (process.env.__BROWSER__) {
            app.use();
        }

        return <p className={css.hello}>{this.props.greet || 'Hello'} World!</p>;
    }
}

function a(b: string): string {
    console.log('b = ', b); // tslint:disable-line

    return b;
}

if (process.env.__DEV__) {
    a('Hello!');
}

export default App;
