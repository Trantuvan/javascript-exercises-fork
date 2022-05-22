const repeatString = function (repeatString, repeatTime) {
  let result = "";

  if (repeatTime === 0 || repeatString === "") {
    return result;
  }

  if (repeatTime < 0) {
    return (result = "ERROR");
  }

  // *1 loop through repeatTime
  for (let i = 0; i < repeatTime; i++) {
    // *2 concat repeatString
    result += repeatString;
  }
  // *3 return result
  return result;
};

// Do not edit below this line
module.exports = repeatString;
