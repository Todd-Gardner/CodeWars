/* *** Instructions ***
ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

CIPHERS FUNDAMENTALS */

function rot13(message) {
  // --- Time: 771ms ---
  let result = "";

  for (let i = 0; i < message.length; i++) {
    let char = message.charCodeAt(i);

    if (char > 31 && char < 65) {
      result += message[i];
    } else if ((char > 64 && char < 78) || (char > 90 && char < 110)) {
      result += String.fromCharCode(char + 13);
    } else {
      result += String.fromCharCode(char - 13);
    }
  }
  return result;
}
// Other answers:
// const rot13 = (message) =>
//   message.replace(/[a-z]/gi, (letter) =>
//     String.fromCharCode(
//       letter.charCodeAt(0) + (letter.toLowerCase() <= "m" ? 13 : -13)
//     )
//   );

// --- Tests ---
// describe("Rot13", function () {
//   it("test", function () {
//     Test.expect(
//       "grfg" == rot13("test"),
//       "Input: test , Expected Output: grfg , Actual Output: " + rot13("test")
//     );
//   });
//   it("Test", function () {
//     Test.expect(
//       "Grfg" == rot13("Test"),
//       "Input: Test , Expected Output: Grfg , Actual Output: " + rot13("Test")
//     );
//   });
// });
