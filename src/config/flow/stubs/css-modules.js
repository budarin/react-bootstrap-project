// @flow

type CSSModule = {
    use: Function,
    unuse: Function,
    locals: {
        [key: string]: string,
    },
};

const emptyCSSModule: CSSModule = {
    use: () => {},
    unuse: () => {},
    locals: {},
};

export default emptyCSSModule;
