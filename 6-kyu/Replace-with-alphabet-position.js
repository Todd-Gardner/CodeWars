/* *** Instructions *** 
In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.

Example
alphabetPosition("The sunset sets at twelve o' clock.")
Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11" ( as a string )

STRINGS FUNDAMENTALS */

function alphabetPosition(text) {
  // --- Time: 759ms ---
  return text
    .toLowerCase()
    .split("")
    .map((el) => el.charCodeAt() - 96)
    .filter((el) => el > 0 && el <= 26)
    .join(" ");
  //   or try regex replace[a-z]-96...

  // Other answers:
  // return text
  //   .toUpperCase()
  //   .match(/[a-z]/gi)
  //   .map((c) => c.charCodeAt() - 64)
  //   .join(" ");
}

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(
//       alphabetPosition("The sunset sets at twelve o' clock."),
//       "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"
//     );
//     Test.assertEquals(
//       alphabetPosition("The narwhal bacons at midnight."),
//       "20 8 5 14 1 18 23 8 1 12 2 1 3 15 14 19 1 20 13 9 4 14 9 7 8 20"
//     );
//   });
// });
