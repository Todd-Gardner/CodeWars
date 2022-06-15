/* *** Instructions ***
Given an array of ones and zeroes, convert the equivalent binary value to an integer.

Eg: [0, 0, 0, 1] is treated as 0001 which is the binary representation of 1.

Examples:

Testing: [0, 0, 0, 1] ==> 1
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 0, 1] ==> 5
Testing: [1, 0, 0, 1] ==> 9
Testing: [0, 0, 1, 0] ==> 2
Testing: [0, 1, 1, 0] ==> 6
Testing: [1, 1, 1, 1] ==> 15
Testing: [1, 0, 1, 1] ==> 11
However, the arrays can have varying lengths, not just limited to 4.

FUNDAMENTALS ARRAYS */

const binaryArrayToNumber = (arr) => {
  let total = 0;
  let bitValue = 1;
  // --- Time: 765ms ---

  for (let i = arr.length - 1; i >= 0; i--) {
    if (arr[i] == 1) {
      total += bitValue;
    }
    bitValue *= 2;
  }
  return total;
  // Using reduce method:
  // return arr.reduce((total, cur) => (total = total * 2 + cur), 0); // *= 2

  // Other answers:
  // return parseInt(arr.join(""), 2);
};

// --- Tests ---
//  describe("One's and Zero's", () => {
//    it("Example tests", () => {
//      Test.assertEquals(binaryArrayToNumber([0, 0, 0, 1]), 1);
//      Test.assertEquals(binaryArrayToNumber([0, 0, 1, 0]), 2);
//      Test.assertEquals(binaryArrayToNumber([1, 1, 1, 1]), 15);
//      Test.assertEquals(binaryArrayToNumber([0, 1, 1, 0]), 6);
//    });
//  });
