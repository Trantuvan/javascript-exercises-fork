const removeFromArray = function (origins, ...removals) {
  for (const removeElem of removals) {
    // *1 Check origins contains elem of removals --> return index
    let indexOfOrigins = origins.indexOf(removeElem);

    // *2 if yes --> indexOf removalElem
    if (indexOfOrigins > -1) {
      // *3 remove that elem from origins
      origins.splice(indexOfOrigins, 1);
    }
  }
  return origins;
};
// const removeFromArray = function (...args) {
//   const array = args[0];
//   const newArray = [];

//   // * remove only elements that are contained both in origins and removal array
//   array.forEach((item) => {
//     if (!args.includes(item)) {
//       newArray.push(item);
//     }
//   });
//   return newArray;
// };

// Do not edit below this line
module.exports = removeFromArray;
