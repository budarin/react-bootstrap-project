import puppeteer from 'puppeteer';
// import './App';

describe('Home', () => {
    const width = 1024;
    const height = 768;
    const launchProps = {
        headless: false,
        slowMo: 80,
        args: [`--window-size=${width},${height}`],
    };

    let page;
    let browser;
    let context;

    jest.setTimeout(10000);

    beforeAll(async () => {
        browser = await puppeteer.launch(launchProps);
        const context = await browser.createIncognitoBrowserContext();
        page = await context.newPage();
        await page.goto('https://google.com/');
    });

    afterAll(async () => {
        await context.close();
    });

    it('should load without error', async () => {
        const text = await page.evaluate(() => document.body.textContent);
        expect(text).toContain('google');
    });
});
