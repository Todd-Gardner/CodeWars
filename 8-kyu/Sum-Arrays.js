/* *** Instructions
Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

Examples
Input: [1, 5.2, 4, 0, -1]
Output: 9.2

Input: []
Output: 0

Input: [-2.398]
Output: -2.398

Assumptions
You can assume that you are only given numbers.
You cannot assume the size of the array.
You can assume that you do get an array and if the array is empty, return 0.
FUNDAMENTALS */

function sum(numbers) {
  // --- Time: 731ms ---
  return numbers.reduce((cur, acc) => (cur += acc), 0);

  // Other answers:
  // return numbers.reduce((a, b) => a + b, 0);
}

// --- Tests ---
// describe("sum", function() {
//     it ("The method sum should be defined.", function () {
//         Test.expect(sum, "The method sum is not defined.")
//     });

//     it ("Empty array should yield 0.", function () {
//         Test.assertEquals(sum([]), 0)
//     });

//     it ("One number in array should be that number.", function () {
//         for (let i = 0; i < 5; i++) {
//             r = Test.randomNumber()
//             Test.assertEquals(sum([r]), r)
//         }
//         Test.assertEquals(sum([5]), 5)
//         Test.assertEquals(sum([1251]), 1251)
//     });

// it ("One negative number in array should be that number.", function () {
//     for (let i = 0; i < 5; i++) {
//         r = -1*Test.randomNumber()
//         Test.assertEquals(sum([r]), r)
//     }
//     Test.assertEquals(sum([-1]), -1)
//     Test.assertEquals(sum([-521]), -521)
// });
