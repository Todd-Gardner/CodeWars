/* *** Instructions *** 
Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

For example,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]
The correct answer would be 17.

Hint: Don't forget to check for bad values like null/undefined

ARRAYS FUNDAMENTALS */

function countSheeps(arrayOfSheep) {
  //   --- Time: 661ms - ordered fastest to slowest ---
  let count = 0;

  for (s of arrayOfSheep) {
    if (s === true) {
      count += 1;
    }
    //     s === true && count++;
  }
  return count;
  //   return arrayOfSheep.reduce((acc, cur) => {
  //     cur === true && acc++;
  //     return acc;
  //   },0);

  // Other answers:
  // return arrayOfSheeps.filter(Boolean).length; // filter removes falsey values!
}

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     var array1 = [
//       true,
//       true,
//       true,
//       null,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       true,
//       false,
//       true,
//       false,
//       undefined,
//       true,
//       true,
//       true,
//       true,
//       true,
//       false,
//       false,
//       true,
//       true,
//     ];

//     Test.assertEquals(countSheeps(array1), 17, "There are 17 sheeps in total");
//   });
// });
