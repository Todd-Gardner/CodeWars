/* *** Instructions ***
Given a string of words, you need to find the highest scoring word.

Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

You need to return the highest scoring word as a string.

If two words score the same, return the word that appears earliest in the original string.

All letters will be lowercase and all inputs will be valid.

FUNDAMENTALS STRINGS ARRAYS */

function high(x) {
  // --- Time: 860ms ---
  //   Lower case char codes start at 97
  const words = x.split(" ");
  const letterNums = Array(words.length).fill(0);

  for (let i = 0; i < words.length; i++) {
    const word = words[i];
    for (let j = 0; j < word.length; j++) {
      letterNums[i] += word.charCodeAt(j) - 96;
    }
  }
  return words[letterNums.indexOf(Math.max(...letterNums))];

  // Other answers:
  //   let as = s
  //     .split(" ")
  //     .map((s) => [...s].reduce((a, b) => a + b.charCodeAt(0) - 96, 0));
  //   return s.split(" ")[as.indexOf(Math.max(...as))];
}

// --- Tests ---
// const chai = require("chai");
// const assert = chai.assert;
// chai.config.truncateThreshold = 0;

// describe("Basic tests", () => {
//   it("Testing for fixed tests", () => {
//     assert.strictEqual(high("man i need a taxi up to ubud"), "taxi");
//     assert.strictEqual(
//       high("what time are we climbing up the volcano"),
//       "volcano"
//     );
//     assert.strictEqual(high("take me to semynak"), "semynak");
//     assert.strictEqual(high("aa b"), "aa");
//     assert.strictEqual(high("b aa"), "b");
//     assert.strictEqual(high("bb d"), "bb");
//     assert.strictEqual(high("d bb"), "d");
//     assert.strictEqual(high("aaa b"), "aaa");
//   });
// });
