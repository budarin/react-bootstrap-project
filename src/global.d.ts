// декларируем любой .css модуль который будет возвращать any
declare module '*.css' {
    export const use: Function;
    export const unuse: Function;
    export const locals: {
        [name: string]: string;
    };
}
