// 1. Write a program that checks if the input is a string:

function isString(input) {
  return typeof input === "string";
}
console.log("=================");
console.log("challenge #1:");
console.log(isString("abc"));
console.log(isString(190));
console.log("=================");

// 2. Write a program that checks if a string is blank:

function isBlankString(input) {
  return typeof input === "string" && input.trim() === "";
}
console.log("challenge #2:");
console.log(isBlankString("abc"));
console.log(isBlankString(""));
console.log(isBlankString(12));
console.log(isBlankString(" "));
console.log(isBlankString("      "));
console.log("=================");

// 3.Write a program that capitalizes the first character of a string:
function captializeFirst(input) {
  if (typeof input === "string") {
    const firstChar = input.slice(0, 1);
    const fisrtCharUpper = firstChar.toUpperCase();
    const remainChars = input.slice(1);
    return `${fisrtCharUpper}${remainChars}`;
  } else {
    return `Oops!${input} isn't a valid input. Please enter letters only.`;
  }
}
console.log("challenge #3:");
console.log(captializeFirst("abcdef3"));
console.log(captializeFirst(1234));
console.log("=================");

// 4.Write a program that abbreviates a full name:

function abbr(firstName, lastName) {
  const firstLetter = lastName.slice(0, 1);
  return `${firstName} ${firstLetter}.`;
}

console.log("challenge #4:");
console.log(abbr("Ryan", "Curtis"));
console.log("=================");
// 5. Write a program that will truncate a sentence ater a given amount of characters:

function truncate(stringVar, numVar) {
  const letters = stringVar.slice(0, numVar);
  return `${letters}...`;
}

console.log("challenge #5:");
console.log(truncate("I am a long sentence", 6));
console.log("=================");

// 6.Use slice to return from the "g" all the way to the end of the following sentence:

function sliceString(string, letter) {
  resultOfSlice = str.slice(str.indexOf(letter));
  return resultOfSlice;
}

const str = "The practitioners grappled on the road side!";

console.log("challenge #6:");
console.log(sliceString(str, "g"));

console.log("==================");
