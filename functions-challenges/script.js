// Write a program that takes an array of words and returns the longest word.
// ['a'. 'b', 'cc'] => 'cc'

function longestWord(wordArray) {
  if (Array.isArray(wordArray)) {
    let maxlength = "";
    for (let word of wordArray) {
      if (typeof word === "string" && /^[a-zA-Z]+$/.test(word)) {
        if (word.length > maxlength.length) {
          maxlength = word;
        }
      } else {
        console.log("The array must incloud string.");
        break;
      }
    }

    return maxlength;
  } else {
    return console.log("The type of input must be array.");
  }
}

console.log(longestWord(["a", "asdf", "car", "jlkjkjlh"]));
console.log(longestWord(["1", "33", "444", "234532"]));
console.log(longestWord([1, 22, 333, 4444]));

// const wordArray = ["a", "asdf", "car", "jlkjkjlh"];
// let maxlength = "";

// wordArray.map((word) => {
//   if (word.length > maxlength.length) {
//     maxlength = word;
//   }
// });

// console.log(maxlength);

// =================================
//2. Write a program that swaps the first and last characters of a string.
// 'ryan' => 'nyar'

function swapChar(word) {
  if (typeof word !== "string") {
    return "Please add word.";
  } else {
    let wordArray = word.split("");
    wordArray[0] = word[word.length - 1];
    wordArray[word.length - 1] = word[0];
    return wordArray.join("");
  }
}

console.log(swapChar("ryan"));
console.log(swapChar(23));

// ======================================

// 3.Write a program that finds the sum of a list of numbers.
// [1, 2, 3] => 6
function sumNum(numbers) {
  if (!Array.isArray(numbers)) {
    console.log("Please enter an array of numbers.");
    return;
  }

  let sum = 0;
  for (let num of numbers) {
    if (typeof num === "number") {
      sum += num;
    } else {
      console.log(`Skipping non-number value: ${num}`);
    }
  }

  return sum;
}

console.log(sumNum([1, 2, 3]));
console.log(sumNum(["a", "b", "c"]));

// ===========================================
// 4.Combine two arrays by alternatingly taking elements from each at every iteration.
// EX: [1, 2, 3], [4, 5, 6] => [1, 4, 2, 5, 3, 6]

function combineArrays(arrayOne, arrayTwo) {
  let newArray = [];
  const maxLength =
    arrayOne.length > arrayTwo.length ? arrayOne.length : arrayTwo.length;

  for (let i = 0; i < maxLength; i++) {
    if (i < arrayOne.length) {
      newArray.push(arrayOne[i]);
    }
    if (i < arrayTwo.length) {
      newArray.push(arrayTwo[i]);
    }
  }
  return newArray;
}

console.log(combineArrays([1, 2, 3, 4], [5, 6, 7]));

// ======================================
// 5.Create a title case program
// EX: "I am a sentence" => "I Am A Sentence"

function capitalizeLetter(stringInput) {
  if (typeof stringInput !== "string") {
    return "The input must be a string of words.";
  } else if (!/^[a-zA-Z\s]+$/.test(stringInput)) {
    return "The string must contain only letters and spaces.";
  } else {
    const words = stringInput.split(" ");
    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      if (word.length > 0) {
        const firstChar = word[0].toUpperCase();
        const rest = word.split("").splice(1).join("");
        words[i] = firstChar + rest;
      }
    }
    return words.join(" ");
  }
}

console.log(capitalizeLetter("i am a sentence"));
console.log(capitalizeLetter("12345"));
console.log(capitalizeLetter(12345));

// ========================================

// 6.Return longest word in a string
// EX: "This string has several different values" => "different"

function longestWordInString(string) {
  const arrayWords = string.split(" ");
  let longest = ""; // initialize as string, not number
  for (let word of arrayWords) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
}

console.log(longestWordInString("This string has several different values"));

// ==========================
// 7. Write a program that takes a string and returns the letters in alphabetical order
// EX: "Hi there" => "eehhirt"

function sortingLetter(input) {
  if (typeof input !== "string") {
    return "The input must be a string of words.";
  } else if (!/^[a-zA-Z\s]+$/.test(input)) {
    return "The string must contain only letters and spaces.";
  } else {
    const cleaned = input.replace(/[^a-zA-Z]/g, "").toLowerCase();
    const sorted = cleaned.split("").sort().join("");
    return sorted;
  }
}

console.log(sortingLetter("Hi there"));
console.log(sortingLetter("1234"));
console.log(sortingLetter(1234));

// ==================================
// 8.Write a program that returns extracted values from an array using specified indices and puts them into a new array.
// ['a', 'b', 'c', 'd'], [1, 3] => ['b', 'd']
// ['a', 'b', 'c', 'd'] is the original code.
// [1, 3] is the specified indices fo the array (index 1 and index 3)
// [b, d] is the new array returned from the specified indices.

function getElementsByIndices(array, indices) {
  if (!Array.isArray(array) || !Array.isArray(indices)) {
    return "Both inputs must be arrays.";
  }

  return indices.map((index) => array[index]);
}

console.log(getElementsByIndices(["a", "b", "c", "d"], [1, 3]));

// =========================================
// 9.Complete the following steps:
// Create an object name 'user'. Give the object 2 (two) properties named userName and activeStatus
// the userName property should take any string value.
// the starter (or default) for the activeStatus property should be set to 'away'.

// Write an arrow function
// that changes the activeStatus to 'active'
// returns an interpolated string that contains the userName and activeStatus values.
// login(user) => 'ryan is active'

// Note: Use string interpolation. Avoid hardcoding this.

const user = {
  userName: "Hras",
  activeStatus: "away",
};

// const changeStatus = () => {
//   user.activeStatus = "Active";
//   return `${user.userName} is active.`;
// };

const changeStatus = () =>
  `${user.userName} is ${(user.activeStatus = "Active")}.`;

console.log(changeStatus());

// ==========================
// 10.Write a function that takes a base value and an exponent and will return the product (power).
// pow(4,2) => 16

function powerNum(baseValue, exponent) {
  if (typeof base !== "number" || typeof exponent !== "number") {
    return "Both base and exponent must be numbers.";
  }
  let resultNum = 1;
  for (i = 0; i < exponent; i++) {
    resultNum *= baseValue;
  }
  return resultNum;
}

console.log(powerNum(4, 2));
console.log(powerNum(2, 4));
