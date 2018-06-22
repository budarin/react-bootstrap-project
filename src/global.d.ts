// декларируем любой .css модуль который будет возвращать any
declare module '*.css' {
    export interface CssModule {
        use: Function;
        unuse: Function;
        locals: {
            [name: string]: string;
        };
    }
    export const use: Function;
    export const unuse: Function;
    export const locals: {
        [name: string]: string;
    };
}
