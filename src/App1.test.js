import puppeteer from 'puppeteer';

const width = 1024;
const height = 768;
const launchProps = {
    headless: false,
    slowMo: 80,
    args: [`--window-size=${width},${height}`],
};

let page;
let browser;

beforeAll(async () => {
    browser = await puppeteer.launch(launchProps);
    page = await browser.newPage();

    await page.goto('https://google.com/');
});

afterAll(async () => {
    await browser.close();
});

it('should load without error', async () => {
    const text = await page.evaluate(() => document.body.textContent);

    expect(text).toContain('google');
});
