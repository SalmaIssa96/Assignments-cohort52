/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Assignments/tree/main/1-JavaScript/Week4#exercise-3-lemon-allergy

Your mom bought you a basket of fruit, because you're doing so well in
HackYourFuture. How sweet of her!

However, she forgot that you are allergic to lemons! Let's quickly dispose of
them before you get an attack.

Complete the function called `sanitizeFruitBasket`:

- It should take two parameters: an array of strings representing a fruit basket 
  to be sanitized and a string indicating the name of the fruit to be taken out.
- Use the `filter` array method to take out the unwanted fruit.
- Return a new array that contains the fruits without any lemons.
------------------------------------------------------------------------------*/
const fruitBasket = [
  'apple',
  'lemon',
  'grapefruit',
  'lemon',
  'banana',
  'watermelon',
  'lemon',
];

// ! Function under test
function sanitizeFruitBasket(fruitBasket, allergicFruit) {
  return fruitBasket.filter((fruit) => fruit !== allergicFruit);
}

// ! Unit tests (using Jest)
describe('js-wk3-ex3-lemonAllergy', () => {
  test('sanitizeFruitBasket should take two parameters', () => {
    expect(sanitizeFruitBasket).toHaveLength(2);
  });

  test('sanitizeFruitBasket should not modify the original `fruitBasket` array', () => {
    const originalFruitBasketContents = [...fruitBasket];
    sanitizeFruitBasket(fruitBasket, 'lemon');
    expect(fruitBasket).toEqual(originalFruitBasketContents);
  });

  test('sanitizeFruitBasket should return a new array that does not include the unwanted `lemon`', () => {
    const result = sanitizeFruitBasket(fruitBasket, 'lemon');
    const expected = ['apple', 'grapefruit', 'banana', 'watermelon'];
    expect(result).toEqual(expected);
  });
});

//extra tests

test('sanitizeFruitBasket should return the same array if the allergic fruit is not present', () => {
  const result = sanitizeFruitBasket(fruitBasket, 'kiwi');
  expect(result).toEqual(fruitBasket);
});

test('sanitizeFruitBasket should return an empty array if all fruits are lemons', () => {
  const result = sanitizeFruitBasket(['lemon', 'lemon', 'lemon'], 'lemon');
  expect(result).toEqual([]);
});

test('sanitizeFruitBasket should return an empty array if the fruit basket is empty', () => {
  const result = sanitizeFruitBasket([], 'lemon');
  expect(result).toEqual([]);
});
