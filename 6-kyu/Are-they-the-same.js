/* *** Instructions ***
Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

Examples
Valid arrays
a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [121, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a, b) returns true because in b 121 is the square of 11, 14641 is the square of 121, 20736 the square of 144, 361 the square of 19, 25921 the square of 161, and so on. It gets obvious if we write b's elements in terms of squares:

a = [121, 144, 19, 161, 19, 144, 19, 11] 
b = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]
Invalid arrays
If, for example, we change the first number to something else, comp is not returning true anymore:

a = [121, 144, 19, 161, 19, 144, 19, 11]  
b = [132, 14641, 20736, 361, 25921, 361, 20736, 361]
comp(a,b) returns false because in b 132 is not the square of any number of a.
FUNDAMENTALS ARRAYS */

function comp(array1, array2) {
  if (!array1 || array1.length < 0 || !array2 || array2.length < 0)
    return false;
  if (array1.length != array2.length) return false;
  //if (array1 == null || array2 == null) return false

  // --- Time: 681ms ---
  const sorted1 = array1.sort((a, b) => a - b);
  const sorted2 = array2.sort((a, b) => a - b);

  for (let i = 0; i < sorted2.length; i++) {
    if (sorted2[i] != sorted1[i] ** 2) return false;
  }
  return true;

  // --- Time: 714ms ---
  //   return array2.every((el, idx) => el == array1[idx]**2);
}
// Others answers:
// function comp(array1, array2) {
//   if (array1 == null || array2 == null) return false;
//   array1.sort((a, b) => a - b);
//   array2.sort((a, b) => a - b);
//   return array1.map((v) => v * v).every((v, i) => v == array2[i]);
// }

// --- Tests ---
// describe("Tests", () => {
//   it("test", () => {
//     a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//     a2 = [
//       11 * 11,
//       121 * 121,
//       144 * 144,
//       19 * 19,
//       161 * 161,
//       19 * 19,
//       144 * 144,
//       19 * 19,
//     ];
//     Test.assertEquals(comp(a1, a2), true);
//   });
// });
