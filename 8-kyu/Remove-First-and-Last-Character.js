/* *** Instructions ***

 It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/

function removeChar(str) {
  // --- Time: 897ms ---
  return str.slice(1, str.length - 1);
}
// Other answers:
// function removeChar(str) {
//   return str.slice(1, -1);
// }

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("Fixed Tests", () => {
//     assert.strictEqual(removeChar("eloquent"), "loquen");
//     assert.strictEqual(removeChar("country"), "ountr");
//     assert.strictEqual(removeChar("person"), "erso");
//     assert.strictEqual(removeChar("place"), "lac");
//     assert.strictEqual(removeChar("ooopsss"), "oopss");
//   });
// });
