/*

  Create a function `letterCount` that accepts a string, and finds the number of times each letter
  occurs in the string. For example, given the word "apple", letterCount("apple") should count all
  occurrences of the letters "a", "p", "l" and "e" and then return the following output:

  ```javascript
  {
    "a": 1,
    "p": 2,
    "l": 1,
    "e": 1
  }
  ```

  Bonuses
  - Make sure that lower case letters and upper case letters count for the same character.
  - Ignore spaces, special characters, and punctuation.
  - Instead of just counting letters, calculate their percent-based frequency.
    See: http://www.math.cornell.edu/~mec/2003-2004/cryptography/subs/frequencies.html

    ```javascript
    {
      "a": 0.2, // percent
      "p": 0.4,
      "l": 0.2,
      "e": 0.2
    }
    ```

*/

// YOUR CODE HERE
var finalAnswerObject = {};

function letterCount(phrase) {
  //first eliminate all spaces and symbols.
  // convert string into an array
  // then, find value of array[0], see how many times that occurs;
  // repeat

  var stripSymbols = phrase.replace(/[^\w\s]|_/g, "");
  var noDoubleSpaces = stripSymbols.replace(/\s+/g, "");
  var strippedString = noDoubleSpaces.replace(/[0-9]/g, "");

  for (var i = 0; i < strippedString.length; i++) {
    // console.log(    strippedString[i]   ); // returns letters
    // console.log(    strippedString.split(strippedString[i]).length-1    ); // returns count
    finalAnswerObject[strippedString[i]] = strippedString.split(strippedString[i]).length-1;
    // console.log(    finalAnswerObject   );
  }
}

letterCount("app2314 le %23409 2039123-   k@#)23409sdf#*_)(*$@@)(#*)($#)$");






//var makeArray = noNumbers.split("");


//var arrayWithLengthCount = [];
// for(var i = 0; i < makeArray.length; i++) {
//   console.log(noDoubleSpaces.split(makeArray[i]).length-1);
// }
