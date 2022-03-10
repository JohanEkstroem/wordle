const myFunc = require('./compare');

test('test1', () => {
  const output = 'hello';
  expect(output).toBe('hello');
});

test('compare input and gameString, expect chars to incorrect, misplaced or correct', () => {
  const input = 'asdfg'.toUpperCase();
  const gameString = 'cykla'.toUpperCase();
  const output = myFunc(input, gameString);
  result = [
    {
      letter: 'A',
      result: 'misplaced',
    },
    {
      letter: 'S',
      result: 'incorrect',
    },
    {
      letter: 'D',
      result: 'incorrect',
    },
    {
      letter: 'F',
      result: 'incorrect',
    },
    {
      letter: 'G',
      result: 'incorrect',
    },
  ];
  expect(output).toEqual(result);
});
