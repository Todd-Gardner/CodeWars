/* *** Instructions *** 
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

Example: (Input --> Output)

"Dermatoglyphics" --> true
"aba" --> false
"moOse" --> false (ignore letter case)
FUNDAMENTALS STRINGS */

function isIsogram(str) {
  // --- Time: 906ms --- slow!
  const lower = str.toLowerCase();
  for (let i = 0; i <= str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (lower[i] == lower[j]) return false;
    }
  }
  return true;
  // Other answers:
  // return new Set(str.toUpperCase()).size == str.length;
  // return !/(\w).*\1/i.test(str);
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Tests", () => {
//   it("test", () => {
//     assert.strictEqual(isIsogram("Dermatoglyphics"), true);
//     assert.strictEqual(isIsogram("isogram"), true);
//     assert.strictEqual(
//       isIsogram("aba"),
//       false,
//       "same chars may not be adjacent"
//     );
//     assert.strictEqual(
//       isIsogram("moOse"),
//       false,
//       "same chars may not be same case"
//     );
//     assert.strictEqual(isIsogram("isIsogram"), false);
//     assert.strictEqual(
//       isIsogram(""),
//       true,
//       "an empty string is a valid isogram"
//     );
//   });
// });
