// 1.

const person = {
  firstName: "Arzin",
  lastName: "Ras",
};
const information = {
  dob: "10/02/2015",
  street: "200 E 11200 S",
  city: "Sandy",
  state: "Utah",
};

const personInformation = { ...person, ...information };
console.log(personInformation);

// ==================================

// 2. Given two (2) numbers, check which is the largest. Within your code block use an if statement and ternary syntax.

const num = 4;
const num1 = 7;

if (num > num1) {
  console.log(` ${num} is larger than ${num1}`);
} else if (num == num1) {
  console.log(`${num} is equal to ${num1}`);
} else if (num < num1) {
  console.log(`${num1} is larger than ${num}`);
}

const largestNum =
  num > num1
    ? ` ${num} is larger than ${num1}`
    : num == num && num !== num1
    ? "Data type must be number"
    : num === num1
    ? `${num} is equal to ${num1}`
    : `${num1} is larger than ${num}`;

console.log(largestNum);

// ==================================

//  3. Create a program that will title case a string (capitalize the first letter of each word).
// Here is an example of the output: "I am a sentence" => "I Am A Sentence"

const string1 = "my name is heydar!";
const myArray = string1.split(" ");

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i].length > 0) {
    const firstLetter = myArray[i][0].toUpperCase();
    const restOfWord = myArray[i].slice(1);
    myArray[i] = firstLetter + restOfWord;
  }
}
console.log(myArray.join(" "));

// =====================================

// 4.Write a program that takes a string and returns the letters in alphabetical order:

const inputString = "My name is heydar.";

let lettersArray = [];
for (let i = 0; i < inputString.length; i++) {
  let char = inputString[i];
  if ((char >= "a" && char <= "z") || (char >= "A" && char <= "Z")) {
    lettersArray.push(char.toLowerCase());
  }
}
let sortedArray = lettersArray.sort();

console.log(sortedArray.join(""));
