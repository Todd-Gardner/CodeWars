/* *** Instructions ***
Given a list of integers, determine whether the sum of its elements is odd or even.

Give your answer as a string matching "odd" or "even".

If the input array is empty consider it as: [0] (array with a zero).

Examples:
Input: [0]
Output: "even"

Input: [0, 1, 4]
Output: "odd"

Input: [0, -1, -5]
Output: "even"
Have fun!

FUNDAMENTALS ARRAYS*/

function oddOrEven(array) {
  // --- Time: 913ms ---
  const total = array.reduce((cur, acc) => cur + acc, 0);
  return total % 2 == 0 ? "even" : "odd";
  // --- Time: 941ms ---
  //   return array.reduce((cur, acc) => (cur + acc), 0) % 2 == 0 ? 'even' : 'odd';

  // Other answers:
  //   var result = 0;
  //   for (var i = 0; i < array.length; i++) {
  //     result += array[i];
  //   }
  //   if (result % 2 == 0) {
  //     return "even";
  //   } else {
  //     return "odd";
  //   }
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed tests", () => {
//   it("Edge tests", () => {
//     assert.strictEqual(oddOrEven([0]), "even");
//     assert.strictEqual(oddOrEven([1]), "odd");
//     assert.strictEqual(oddOrEven([]), "even");
//   });

//   it("Even tests", () => {
//     assert.strictEqual(oddOrEven([0, 1, 5]), "even");
//     assert.strictEqual(oddOrEven([0, 1, 3]), "even");
//     assert.strictEqual(oddOrEven([1023, 1, 2]), "even");
//   });

//   it("Negative Even tests", () => {
//     assert.strictEqual(oddOrEven([0, -1, -5]), "even");
//     assert.strictEqual(oddOrEven([0, -1, -3]), "even");
//     assert.strictEqual(oddOrEven([-1023, 1, -2]), "even");
//   });

//   it("Odd tests", () => {
//     assert.strictEqual(oddOrEven([0, 1, 2]), "odd");
//     assert.strictEqual(oddOrEven([0, 1, 4]), "odd");
//     assert.strictEqual(oddOrEven([1023, 1, 3]), "odd");
//   });

//   it("Negative Odd tests", () => {
//     assert.strictEqual(oddOrEven([0, -1, 2]), "odd");
//     assert.strictEqual(oddOrEven([0, 1, -4]), "odd");
//     assert.strictEqual(oddOrEven([-1023, -1, 3]), "odd");
//   });
// });
