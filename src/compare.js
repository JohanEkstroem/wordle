let input = 'hallå'.toUpperCase();
let gameString = 'cykla'.toUpperCase();
export const compareStrings = (input, gameString) => {
  let a = input.split('');
  let b = gameString.split('');
  let temp = [];
  let output = [];
  let copy = b.slice();

  /*
This foor loop does four things: 
1. look for matches
2. pushes a match into output array and with right position
3. replaces the char in game word into null
4. pushes all matches into a temp array
   */
  for (let i = 0; i < a.length; i++) {
    if (a[i] === copy[i]) {
      output[i] = { letter: a[i], result: 'correct' };
      copy[i] = null;
      temp.push(i);
    }
  }

  for (let i = 0; i < a.length; i++) {
    if (!temp.includes(i)) {
      if (copy.includes(a[i])) {
        output[i] = { letter: a[i], result: 'misplaced' };
      }
      if (!copy.includes(a[i])) {
        output[i] = { letter: a[i], result: 'incorrect' };
      }
    }
  }

  console.log(output);
  return output;
};
compareStrings('hallå', 'cykla');
export default compareStrings;
