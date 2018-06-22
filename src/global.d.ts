// декларируем любой .css модуль который будет возвращать any
export interface CssModule {
    use: Function;
    unuse: Function;
    locals: {
        [name: string]: string;
    };
}

declare module '*.css' {
    export interface CssModule {}
}
