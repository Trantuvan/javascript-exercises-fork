const sumAll = function (number1, number2) {
  let sum = 0;

  //Check for negative numbers
  if (
    number1 < 0 ||
    number2 < 0 ||
    typeof number1 !== "number" ||
    typeof number2 !== "number"
  ) {
    return "ERROR";
  }
  const min = Math.min(number1, number2);
  const max = Math.max(number1, number2);
  const distance = Math.abs(max - min) + min;

  sum = (distance * (max + min)) / 2;
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
