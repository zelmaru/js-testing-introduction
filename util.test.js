const puppeteer = require('puppeteer')
const {generateText, checkAndGenerate} = require('./util');

jest.setTimeout(30000); // default timeout was 5000 ms (therefore the E2E test could not pass)

// UNIT TEST
// test description + anonymous function wit the function JEST will execute (your testing code)
test('UNIT: sould output name and age', () => {
  const text = generateText('Marie', 25);
  expect(text).toBe('Marie (25 years old)'); // if not using JEST, this would be a function provided by assertion lib. 
  // const emptyText = generateText('', null);
  // expect(emptyText).toBe(' (null years old)')
});


// INTEGRATION TEST
test("INTEGRATION: should generate a valid text output", () => {
  const text2 = checkAndGenerate('Marie', 25);
  expect(text2).toBe('Marie (25 years old)');
})


// E2E - asynchronous!!!
test("E2E: should click around", async () => {
  const browser = await puppeteer.launch({
    headless: false,
    slowMo: 80,
    args: ['--window-size=1920, 1080']
  });
  const page = await browser.newPage();
  await page.goto('http://127.0.0.1:8080/');
  await page.click('input#name');
  await page.type('input#name', 'Marie');
  await page.click('input#age');
  await page.type('input#age', '25');
  await page.click('#btnAddUser');
  const finalText = await page.$eval('.user-item', el => el.textContent);
  expect(finalText).toBe('Marie (25 years old)');


})