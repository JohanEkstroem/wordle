/*  
[x] Inputs: Två ord(två textsträngar)
[x] Ett ord som är gissningen
[x] Ett ord som är det korrekta ordet
[-] Kontrollera vilka bokstäver från det ena ordet som förekommer i det andra och i så fall var
*/

let input = 'hallå'.toUpperCase();
let gameString = 'cykla'.toUpperCase();
let compareStrings = (input, gameString) => {
  let a = input.split('');
  let b = gameString.split('');
  let output = [];
  let wrongPlace = [];

  for (let i = 0; i < a.length; i++) {
    /*     if (gameString.includes(a[i]) && a[i] === b[i]) {
      output.push({
        letter: a[i],
        result: 'correct',
      });
    }
    if (gameString.includes(a[i]) && a[i] !== b[i]) {
      output.push({
        letter: a[i],
        result: 'misplaced',
      });
      wrongPlace.push(a[i]);
    } else if (gameString.includes(a[i]) && wrongPlace.includes(a[i])) {
      output.push({
        letter: a[i],
        result: 'incorrect',
      });
    } else {
      output.push({
        letter: a[i],
        result: 'incorrect',
      });
    } */

    if (a[i] === b[i]) {
      output.push({
        letter: a[i],
        result: 'correct',
      });
    } else if (gameString.includes(a[i])) {
      output.push({
        letter: a[i],
        result: 'misplaced',
      });
    } else {
      output.push({
        letter: a[i],
        result: 'incorrect',
      });
    }
  }
  console.log(`input: ${a.join('')}`);
  console.log(`expect: ${b.join('')}`);
  console.log(output);

  return output;
};

compareStrings(input, gameString);

/* export default myFunc; */
module.exports = compareStrings;

/* 
1. Define problem
  -Compare input string with game string.
  -Display which character matches the gameString
  
2. Separate problem
  x Compare both strings with each other
  x Make each string to an array
  x Loop through input array
  x Does any character from input string match any character in gameString?
  -Which character does match?
  -Which character doesn't match?
  -Is character in right spot?
  x output an array with object
*/
