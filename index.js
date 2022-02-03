/*
Return true if the given string is a palindrome. 
Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way 
both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters 
(punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, 
RaceCar, and race CAR among others.

We'll also pass strings with special symbols, 
such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
*/

const checkNonAlphabets = str => {
  return str.replace(/[^A-Za-z0-9]/g, "");
};
const toLowerCase = str => {
  return str.toLowerCase();
};
const strReversed = str => {
  let result = "";
  for (let i = str.length - 1; i > -1; i--) {
    result += str[i];
  }
  return result;
};

// console.log(checkNonAlphabets("_eye_-*&&*&"));
// console.log(toLowerCase("Py name"));
// console.log(strReversed("racecar"));

const palindrome = str => {
  //check for non aphabetic words
  let check = checkNonAlphabets(str);

  //convert to lowercase
  let lowerCase = toLowerCase(check);

  // reversing of string to match
  let reverString = strReversed(lowerCase);

  //checking if the lowerCase string is equal to the reversed string
  return lowerCase === reverString;
};

console.log(palindrome("eye232")); //false
console.log(palindrome("A man, a plan, a canal. Panama")); //true
console.log(palindrome("almostomla")); //false
