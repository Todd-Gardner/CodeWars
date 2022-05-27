/* *** Instructions
A few cases:


(-12, 2, -6)  ->  true
(-12, 2, -5)  ->  false

(45, 1, 6)    ->  false
(45, 5, 15)   ->  true

(4, 1, 4)     ->  true
(15, -5, 3)   ->  true
FUNDAMENTALS NUMBERS BASIC LANGUAGE FEATURES */

function isDivideBy(number, a, b) {
  // --- Time: 799ms ---
  return (number / a) % 1 == 0 && (number / b) % 1 == 0;

  // I should have refreshed on % operator!

  // Other answers:
  // return number % a === 0 && number % b === 0;
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(isDivideBy(-12, 2, -6), true);
//     assert.strictEqual(isDivideBy(-12, 2, -5), false);
//     assert.strictEqual(isDivideBy(45, 1, 6), false);
//     assert.strictEqual(isDivideBy(45, 5, 15), true);
//     assert.strictEqual(isDivideBy(4, 1, 4), true);
//     assert.strictEqual(isDivideBy(15, -5, 3), true);
//   });
// });
