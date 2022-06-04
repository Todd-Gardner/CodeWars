/* *** Instructions *** 
You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.

Note: you will always receive a valid array (string in COBOL) containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

ARRAYS FUNDAMENTALS*/

function isValidWalk(walk) {
  // --- Time: 596ms ---
  if (walk.length !== 10) return false;
  const map = {
    n: 1,
    e: 2,
    s: -1,
    w: -2,
  };
  let total = 0;
  for (let d of walk) {
    total += map[d];
  }
  return total === 0;
  // other answers:

  // I was thinking to use reduce...
  // return walk.length === 10 && walk.reduce((a, b) => a + b, 0) === 0;
  // -------------------------------------------------------
  // return (
  //   walk.length == 10 &&
  //   !walk.reduce(function (w, step) {
  //     return w + { n: -1, s: 1, e: 99, w: -99 }[step];
  //   }, 0)
  // );
  // -------------------------------------------------------
  //   var res = { n: 0, w: 0, s: 0, e: 0 };
  //   walk.forEach((c) => res[c]++);
  //   return walk.length === 10 && res.n == res.s && res.e == res.w;
}

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     //some test cases for you...
//     Test.expect(
//       isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
//       "should return true"
//     );
//     Test.expect(
//       !isValidWalk([
//         "w",
//         "e",
//         "w",
//         "e",
//         "w",
//         "e",
//         "w",
//         "e",
//         "w",
//         "e",
//         "w",
//         "e",
//       ]),
//       "should return false"
//     );
//     Test.expect(!isValidWalk(["w"]), "should return false");
//     Test.expect(
//       !isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
//       "should return false"
//     );
//   });
// });
