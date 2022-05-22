const reverseString = function (string) {
  if (string === "") {
    return "";
  }
  //*1 convert string to array
  const stringArray = string.split("");
  // *2 reverse array
  stringArray.reverse();
  //*3 convert array to string
  const reverseString = stringArray.join("");
  return reverseString;
};

// Do not edit below this line
module.exports = reverseString;

// reverse String
// input string
// output string reverse
