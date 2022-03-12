import compareStrings from './compare';

test('compare input and gameString, expect chars to incorrect, misplaced or correct', () => {
  const input = 'hallå'.toUpperCase();
  const gameString = 'cykla'.toUpperCase();
  const output = compareStrings(input, gameString);
  let result = [
    {
      letter: 'H',
      result: 'incorrect',
    },
    {
      letter: 'A',
      result: 'misplaced',
    },
    {
      letter: 'L',
      result: 'incorrect',
    },
    {
      letter: 'L',
      result: 'correct',
    },
    {
      letter: 'Å',
      result: 'incorrect',
    },
  ];
  expect(output).toEqual(result);
});

test('tests if all chars are perfect match', () => {
  const input = 'johan'.toUpperCase();
  const gameString = 'johan'.toUpperCase();
  const output = compareStrings(input, gameString);
  let result = [
    {
      letter: 'J',
      result: 'correct',
    },
    {
      letter: 'O',
      result: 'correct',
    },
    {
      letter: 'H',
      result: 'correct',
    },
    {
      letter: 'A',
      result: 'correct',
    },
    {
      letter: 'N',
      result: 'correct',
    },
  ];
  expect(output).toEqual(result);
});

test('', () => {
  const input = 'oolll'.toUpperCase();
  const gameString = 'llloo'.toUpperCase();
  const output = compareStrings(input, gameString);
  let result = [
    {
      letter: 'O',
      result: 'misplaced',
    },
    {
      letter: 'O',
      result: 'misplaced',
    },
    {
      letter: 'L',
      result: 'correct',
    },
    {
      letter: 'L',
      result: 'misplaced',
    },
    {
      letter: 'L',
      result: 'misplaced',
    },
  ];
  expect(output).toEqual(result);
});
