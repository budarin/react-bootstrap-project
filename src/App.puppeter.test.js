/* eslint-disable import/unambiguous */

let page;
const timeout = 10000;

beforeAll(async () => {
    page = await global.browser.newPage();

    await page.goto('https://localhost/');
}, timeout);

afterAll(async () => {
    await page.close();
});

it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);

    expect(text).toContain('Hello World!');
});
