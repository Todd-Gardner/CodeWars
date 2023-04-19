/* *** Instructions ***
Write a function that takes an array of numbers (integers for the tests) and a target number. It should find two different items in the array that, when added together, give the target value. The indices of these items should then be returned in a tuple / list (depending on your language) like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or greater, and all of the items will be numbers; target will always be the sum of two different items from that array).

Based on: http://oj.leetcode.com/problems/two-sum/

twoSum([1, 2, 3], 4) // returns [0, 2] or [2, 0]
ARRAYS FUNDAMENTALS ALGORITHMS */

function twoSum(numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      if (numbers[i] + numbers[j] === target) {
        return [i, j];
      }
    }
  }
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Fixed Tests", function () {
//   const withProp = [0, 1, 2];
//   withProp.prop = 3;
//   const testCases = [
//     [[1, 2, 3], 4, [0, 2]],
//     [[1234, 5678, 9012], 14690, [1, 2]],
//     [[2, 2, 3], 4, [0, 1]],
//     [[2, 3, 1], 4, [1, 2]],
//     [withProp, 3, [1, 2], "Array with added property"],
//   ];
//   for (const [numbers, target, expected, msg] of testCases)
//     it(`Testing for numbers = [${numbers.join(
//       ", "
//     )}], target = ${target}`, () => check(numbers, target, expected, msg));

//   const numericalCompare = (a, b) => a - b;
//   function check(arr, target, expected, msg) {
//     actual = twoSum(arr.slice(), target);
//     assert.isArray(actual);
//     assert.deepEqual(actual.sort(numericalCompare), expected, msg);
//   }
// });

// describe("Random Tests", () => {
//   const rand = (a, b = 0) => Math.floor((b - a) * Math.random() + a);
//   for (let run = 0; run < 100; run++) {
//     let numbers = Array.from({ length: rand(2, 100) }, (_) =>
//       rand(-1000, 1000)
//     );
//     let expected = [rand(numbers.length), rand(numbers.length)];
//     while (expected[1] === expected[0]) expected[1] = rand(numbers.length);

//     let target = numbers[expected[0]] + numbers[expected[1]];

//     it(`Testing for numbers = [${numbers.join(
//       ", "
//     )}], target = ${target}`, () => {
//       let actual = twoSum(numbers.slice(), target);
//       assert.isArray(actual);
//       assert.strictEqual(
//         actual.length,
//         2,
//         `The returned array [${actual}] must be of length 2`
//       );
//       assert.notStrictEqual(actual[0], actual[1], "Indices must be distinct");
//       let a = numbers[actual[0]];
//       let b = numbers[actual[1]];
//       assert.strictEqual(
//         a + b,
//         target,
//         `Numbers ${a}, ${b} at returned indices ${actual[0]} and ${actual[1]} do not add up to ${target}`
//       );
//     });
//   }
// });
