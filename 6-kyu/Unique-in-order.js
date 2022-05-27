/* *** Instructions ***
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]

FUNDAMENTALS ADVANCED LANGUAGE FEATURES ALGORITHMS */

var uniqueInOrder = function (iterable) {
  const result = [];
  // --- Time: 769ms ---
  for (let i = 0; i <= iterable.length; i++) {
    if (iterable[i] != iterable[i + 1]) {
      result.push(iterable[i]);
    }
  }
  return result;
  // Other answers:
  // return [...iterable].filter((a, i) => a !== iterable[i - 1]);
};

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     Test.assertSimilar(uniqueInOrder("AAAABBBCCDAABBB"), [
//       "A",
//       "B",
//       "C",
//       "D",
//       "A",
//       "B",
//     ]);
//   });
// });
