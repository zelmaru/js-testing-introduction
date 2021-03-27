const {generateText, checkAndGenerate} = require('./util');
// UNIT TEST
// test description + anonymous function wit the function JEST will execute (your testing code)
test('UNIT: sould output name and age', () => {
  const text = generateText('Max', 29);
  expect(text).toBe('Max (29 years old)'); // if not using JEST, this would be a function provided by assertion lib. 
  // const emptyText = generateText('', null);
  // expect(emptyText).toBe(' (null years old)')
});


// INTEGRATION TEST
test("INTEGRATION: should generate a valid text output", () => {
  const text2 = checkAndGenerate('Max', 29);
  expect(text2).toBe('Max (29 years old)');
})

