const ftoc = function (fahrenheit) {
  if (fahrenheit === 32) {
    return 0;
  }
  const celcius = ((fahrenheit - 32) * 5) / 9;
  const oneDecimalPlaces = parseFloat(celcius.toFixed(1));
  return oneDecimalPlaces;
};

const ctof = function (celcius) {
  if (celcius === 0) {
    return 32;
  }

  const fahrenheit = (celcius * 9) / 5 + 32;
  const oneDecimalPlaces = parseFloat(fahrenheit.toFixed(1));
  return oneDecimalPlaces;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof,
};
