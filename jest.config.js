const config = {
    rootDir: 'src',
    preset: 'jest-puppeteer',
    cacheDirectory: '../.tmp/jest',
    coverageDirectory: '../.tmp/jest/coverage',
    transform: {
        '^.+\\.(js|ts|jsx|tsx)$': '../config/jest/transformer.js',
    },
    testMatch: [
        '**/__tests__/**/*.js?(x)',
        '**/__tests__/**/*.ts?(x)',
        '**/?(*.)+(spec|test).js?(x)',
        '**/?(*.)+(spec|test).ts?(x)',
    ],
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'json'],
    moduleNameMapper: {
        '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
            '../config/jest/mocks/fileMock.js',
        '\\.(css)$': 'identity-obj-proxy',
    },
    testPathIgnorePatterns: ['/node_modules/'],

    collectCoverage: true,
    coverageDirectory: '../.tmp/coverage',
    collectCoverageFrom: ['**/*.{ts,tsx}', '!src/**/*.d.ts'],

    notify: false,
    globals: {
        'process.env.__DEV__': true,
    },
};

module.exports = config;
