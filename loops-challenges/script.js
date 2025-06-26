// 1.Write a program that prompts the user to guess a randomly generated number between 1 and
// 100. Keep prompting until the user guesses correctly. It should tell the user if the number
// is higher or lower then there current guess

// const randomNumber = Math.floor(Math.random() * 100) + 1;
// let userGuess = null;

// while (randomNumber !== userGuess) {
//   let userInput = prompt("Guess a number between 1 and 100:");
//   userGuess = Number(userInput);

//   if (isNaN(userGuess) || userInput.trim() === "") {
//     alert(
//       "You entered either a letter or left the input field empty. Please enter a number."
//     );
//     continue;
//   }

//   if (randomNumber > userGuess) {
//     alert("Too low!");
//   } else if (randomNumber < userGuess) {
//     alert("Too high!");
//   } else {
//     alert(`Congratulations! You guessed the correct number: ${randomNumber}`);
//   }
// }

// ===============================

// // 2.
// Write a program that extracts values form an array at specific indices and returns the values in a new array.
// Here is an example of potential output: removeByIndex[‘a', 'b', 'c', 'd', 'f', 'f', 'e', 'f'], [1, 5]) => ['b', 'f']]

const originalArray = ["a", "b", "c", "d", "f", "f", "e", "f"];
const idxArray = [1, 5, 9];
let newArray = [];
let count = 0;
for (let i = 0; i < idxArray.length; i++) {
  const index = idxArray[i];
  if (index > 0 && index < originalArray.length) {
    newArray.push(originalArray[index]);
  } else {
    console.log(`The index ${idxArray[i]} out of range.`);
  }
}
console.log(newArray);

// ===================

// 3.Write a program that converts a number into an array of numbers. Ensure each element in the array is a number data type and NOT a string data type.

const numToArray = "12345";
// const numToArray = "1234a";

let numArray = [];

for (let i = 0; i < numToArray.length; i++) {
  const newNum = Number(numToArray[i]);
  if (isNaN(newNum)) {
    console.error(`${numToArray[i]} is not a number!`);
  } else {
    numArray.push(newNum);
  }
}

console.log(numArray);

// ========================

// 4.Write a program to create a new matrix of arrays from two arrays of numbers and strings.

arrayOne = [1, 2, 3];
arrayTwo = ["a", "b", "c", "d"];
let mixedArray = [];

for (let a = 0; a < arrayOne.length; a++) {
  for (let b = 0; b < arrayTwo.length; b++) {
    mixedArray.push([arrayOne[a], arrayTwo[b]]);
    mixedArray.push([arrayTwo[b], arrayOne[a]]);
  }
}

console.log(mixedArray);
