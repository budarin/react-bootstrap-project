const config = {
    rootDir: 'src',
    preset: 'jest-puppeteer',
    cacheDirectory: '../.tmp/jest',
    coverageDirectory: '../.tmp/jest/coverage',
    transform: {
        '^.+\\.(t|j)s$': '../config/jest/transformer.js',
    },
    testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../config/jest/mocks/fileMock.js',
        '\\.(css)$': '../config/jest/mocks/styleMock.js',
    },
    testPathIgnorePatterns: ['/node_modules/'],
    globals: {
        __DEV__: true,
    },
    notify: false,
    notifyMode: 'failure',
};

module.exports = config;
