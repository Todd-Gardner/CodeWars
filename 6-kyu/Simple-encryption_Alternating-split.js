/* *** Instructions ***
Implement a pseudo-encryption algorithm which given a string S and an integer N concatenates all the odd-indexed characters of S with all the even-indexed characters of S, this process should be repeated N times.

Examples:

encrypt("012345", 1)  =>  "135024"
encrypt("012345", 2)  =>  "135024"  ->  "304152"
encrypt("012345", 3)  =>  "135024"  ->  "304152"  ->  "012345"

encrypt("01234", 1)  =>  "13024"
encrypt("01234", 2)  =>  "13024"  ->  "32104"
encrypt("01234", 3)  =>  "13024"  ->  "32104"  ->  "20314"
Together with the encryption function, you should also implement a decryption function which reverses the process.

If the string S is an empty value or the integer N is not positive, return the first argument without changes.

CRYPTOGRAPHY ALGORITHMS STRINGS ARRAYS FUNDAMENTALS */

function encrypt(text, n) {
  // --- Time: 658ms ---
  const even = [];
  const odd = [];

  if (n <= 0 || !text) {
    return text;
  }

  for (let l in text) {
    if (l % 2 == 0) {
      even.push(text[l]);
    } else {
      odd.push(text[l]);
    }
  }
  text = odd.concat(even).join("");
  return encrypt(text, n - 1);

  // Other answers:
  //   if (!text || n <= 0) return text;
  //   while (n--) {
  //     let ans = "";
  //     for (let i = 1; i < text.length; i += 2) {
  //       ans += text[i];
  //     }
  //     for (let i = 0; i < text.length; i += 2) {
  //       ans += text[i];
  //     }
  //     text = ans;
  //   }
  //   return text;
}

function decrypt(encryptedText, n) {
  let result = [];

  if (n <= 0 || !encryptedText) {
    return encryptedText;
  }

  const middle = encryptedText.length / 2;
  const odd = encryptedText.split("").slice(middle);
  const even = encryptedText.split("").slice(0, middle);

  for (let i = 0; i < middle; i++) {
    if (odd[i] != undefined) {
      result.push(odd[i]);
    }
    if (even[i] != undefined) {
      result.push(even[i]);
    }
  }
  encryptedText = result.join("");
  return decrypt(encryptedText, n - 1);

  // Other answers:
  // if (!encryptedText || n <= 0) return encryptedText;
  // const ans = new Array(encryptedText.length);
  // while (n--) {
  //   let j = 0;
  //   for (let i = 1; i < ans.length; i += 2) {
  //     ans[i] = encryptedText[j++];
  //   }
  //   for (let i = 0; i < ans.length; i += 2) {
  //     ans[i] = encryptedText[j++];
  //   }
  //   encryptedText = ans.join("");
  // }
  // return encryptedText;
}

// --- Tests ---
// describe("Solution", function () {
//   it("EncryptExampleTests", function () {
//     Test.assertEquals(encrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", 1), "hsi  etTi sats!");
//     Test.assertEquals(encrypt("This is a test!", 2), "s eT ashi tist!");
//     Test.assertEquals(encrypt("This is a test!", 3), " Tah itse sits!");
//     Test.assertEquals(encrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(encrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(
//       encrypt("This kata is very interesting!", 1),
//       "hskt svr neetn!Ti aai eyitrsig"
//     );
//   });
// });

// describe("Solution", function () {
//   it("DecryptExampleTests", function () {
//     Test.assertEquals(decrypt("This is a test!", 0), "This is a test!");
//     Test.assertEquals(decrypt("hsi  etTi sats!", 1), "This is a test!");
//     Test.assertEquals(decrypt("s eT ashi tist!", 2), "This is a test!");
//     Test.assertEquals(decrypt(" Tah itse sits!", 3), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", 4), "This is a test!");
//     Test.assertEquals(decrypt("This is a test!", -1), "This is a test!");
//     Test.assertEquals(
//       decrypt("hskt svr neetn!Ti aai eyitrsig", 1),
//       "This kata is very interesting!"
//     );
//   });
// });

// describe("Solution", function () {
//   it("Null or Empty", function () {
//     Test.assertEquals(encrypt("", 0), "");
//     Test.assertEquals(decrypt("", 0), "");
//     Test.assertEquals(encrypt(null, 0), null);
//     Test.assertEquals(decrypt(null, 0), null);
//   });
// });
