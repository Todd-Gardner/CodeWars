/* *** Instructions *** 
Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice

STRINGS FUNDAMENTALS */

function duplicateCount(text) {
  // --- Time: 641ms ---
  let count = 0;

  const map = text
    .toLowerCase()
    .split("")
    .reduce((acc, cur) => {
      return acc[cur] ? ++acc[cur] : (acc[cur] = 1), acc;
    }, {});

  for (let key in map) {
    if (map[key] > 1) count++;
  }
  return count;

  // Other answers:

  // return (
  //   text
  //     .toLowerCase()
  //     .split("")
  //     .sort()
  //     .join("")
  //     .match(/([^])\1+/g) || []
  // ).length;
  //------------------------
  // return text
  //   .toLowerCase()
  //   .split("")
  //   .filter(function (val, i, arr) {
  //     return arr.indexOf(val) !== i && arr.lastIndexOf(val) === i;
  //   }).length;
}

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertEquals(duplicateCount(""), 0);
//     Test.assertEquals(duplicateCount("abcde"), 0);
//     Test.assertEquals(duplicateCount("aabbcde"), 2);
//     Test.assertEquals(duplicateCount("aabBcde"), 2, "should ignore case");
//     Test.assertEquals(duplicateCount("Indivisibility"), 1);
//     Test.assertEquals(
//       duplicateCount("Indivisibilities"),
//       2,
//       "characters may not be adjacent"
//     );
//   });
// });
