/* *** Instructions *** The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 
Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

STRINGS ARRAYS FUNDAMENTALS */

function duplicateEncode(word) {
  // --- Time: 781ms ---
  let lowercase = word.toLowerCase();
  let result = "";

  for (let i = 0; i < word.length; i++) {
    if (
      lowercase.indexOf(lowercase[i]) !== lowercase.lastIndexOf(lowercase[i])
    ) {
      result += ")";
    } else {
      result += "(";
    }
  }
  return result;

  // Other answers:
  // Array:
  //   return word
  //     .toLowerCase()
  //     .split("")
  //     .map(function (a, i, w) {
  //       return w.indexOf(a) == w.lastIndexOf(a) ? "(" : ")";
  //     })
  //     .join("");
  // --------------------------------
  // Regex:
  //   word = word.toLowerCase();
  //   return word.replace(/./g, (m) =>
  //     word.indexOf(m) == word.lastIndexOf(m) ? "(" : ")"
  //   );
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Duplicate Encoder", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(duplicateEncode("din"), "(((");
//     assert.strictEqual(duplicateEncode("recede"), "()()()");
//     assert.strictEqual(
//       duplicateEncode("Success"),
//       ")())())",
//       "should ignore case"
//     );
//     assert.strictEqual(duplicateEncode("(( @"), "))((");
//   });
// });
