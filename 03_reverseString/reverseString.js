const reverseString = function(str) {
const arrayStrings = str.split("");
const reverseArray = arrayStrings.reverse();
const joinArray = reverseArray.join("");
return joinArray;
}
const String =("hello there");
const result = reverseString(string);
console.log(result);

// Do not edit below this line
module.exports = reverseString;
