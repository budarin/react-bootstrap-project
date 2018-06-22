// декларируем любой .css модуль который будет возвращать any
export interface CssModule {
    use: Function;
    unuse: Function;
    locals: {
        [name: string]: string;
    };
}

declare module '*.css' {
    export const use: Function;
    export const unuse: Function;
    export const locals: {
        [name: string]: string;
    };
}
