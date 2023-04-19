/* *** Instructions *** 
Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

Examples:

solution('abc', 'bc') // returns true
solution('abc', 'd') // returns false
STRINGS FUNDAMENTALS */

function solution(str, ending) {
  // --- Time: 800ms ---
  return str.endsWith(ending); 
}

// --- Tests ---
// const Test = require("@codewars/test-compat");

// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(solution("abcde", "cde"), true);
//     Test.assertEquals(solution("abcde", "abc"), false);
//   });
// });
