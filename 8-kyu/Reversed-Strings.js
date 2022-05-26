/* *** Instructions ***
Complete the solution so that it reverses the string passed into it.

Examples:
'world'  =>  'dlrow'
'word'   =>  'drow'

FUNDAMENTALS STRINGS */

function solution(str) {
    // --- Time: 889ms ---
  return str.split("").reverse().join("");
}

// Other answers:
// const solution = (s) => [...s].reverse().join("");

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(solution("world"), "dlrow");
//     assert.strictEqual(solution("hello"), "olleh");
//     assert.strictEqual(solution(""), "");
//     assert.strictEqual(solution("h"), "h");
//   });
// });