/* *** Instructions ***
There is an array with some numbers. All numbers are equal except for one. Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance.

This is the first kata in series:

Find the unique number (this kata)
Find the unique string
Find The Unique

FUNDAMENTAL SALGORITHMS ARRAYS */

function findUniq(arr) {
  // --- Time: 2402ms ---
  //   the '+' is for type coercion
  return +arr.filter((v) => arr.indexOf(v) === arr.lastIndexOf(v));

  //   fails long arrays...
  //   let x = arr[i];
  //   let y = [...arr];
  //   for (let i = 0; i < arr.length; i++){
  //     y.splice(i,1);

  //     if (!y.includes(x)) return x;
  //   }

  // Other answers:
  // arr.sort((a, b) => a - b);
  // return arr[0] == arr[1] ? arr.pop() : arr[0];
    
  // return arr.filter((v, i) => arr.indexOf(v) === i)[0];
    
  // return arr.find((n) => arr.indexOf(n) === arr.lastIndexOf(n));
}

// --- Tests ---
const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Example Tests", () => {
  it("Tests", () => {
    assert.strictEqual(findUniq([1, 0, 0]), 1);
    assert.strictEqual(findUniq([0, 1, 0]), 1);
    assert.strictEqual(findUniq([0, 0, 1]), 1);
    assert.strictEqual(findUniq([1, 1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([1, 1, 2, 1, 1]), 2);
    assert.strictEqual(findUniq([3, 10, 3, 3, 3]), 10);
  });
});
