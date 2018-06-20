/* eslint-disable import/no-commonjs */
/* eslint-disable import/unambiguous */
const config = {
    rootDir: 'src',
    preset: 'jest-puppeteer',
    cacheDirectory: '../.tmp/jest',
    coverageDirectory: '../.tmp/jest/coverage',
    transform: {
        '^.+\\.js$': '../config/jest/transformer.js',
    },
    testMatch: ['**/__tests__/**/*.js?(x)', '**/?(*.)+(spec|test).js?(x)'],
    moduleFileExtensions: ['js', 'jsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../config/jest/mocks/fileMock.js',
        '\\.(css)$': '../config/jest/mocks/styleMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/'],
    globals: {},
    notify: false,
    notifyMode: 'failure',
};

module.exports = config;
