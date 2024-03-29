/* *** Instructions *** 
Your task is to find the first element of an array that is not consecutive.

By not consecutive we mean not exactly 1 larger than the previous element of the array.

E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

If the whole array is consecutive then return null.

The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!

ARRAYS FUNDAMENTALS */

function firstNonConsecutive(arr) {
  //   arr[i] – i === arr[0] (diff between el and its index should be arr[0])
  // --- Time: 797ms ---
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] - i !== arr[0]) {
      return arr[i];
    }
  }
  // Other answers:
  // for (let i = 0; i < arr.length - 1; ++i) {
  //   if (arr[i] + 1 !== arr[i + 1]) {
  //     return arr[i + 1];
  //   }
  // }
  //   return null;
  //------------------------------------------------------
  // let result = arr.find((val, index) => val !== index + arr[0]);
  // return Number.isInteger(result) ? result : null;
  //------------------------------------------------------
  // return arr.find((item, index) => arr.filter((el) => el == item).length % 2);
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed tests", () => {
//   it("a simple example", function () {
//     const first = firstNonConsecutive([1, 2, 3, 4, 6, 7, 8]);
//     assert.strictEqual(first, 6);
//   });
// });
