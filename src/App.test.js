import React from 'react';
import renderer from 'react-test-renderer';
import App from './App';

it('renders correctly', () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
});

const timeout = 10000;

describe(
    '/ (Home Page)',
    () => {
        let page;
        beforeAll(async () => {
            page = await global.browser.newPage();
            await page.goto('https://hsrv');
        }, timeout);

        it('should load without error', async () => {
            const text = await page.evaluate(() => document.body.textContent);
            expect(text).toContain('google');
        });
    },
    timeout,
);
