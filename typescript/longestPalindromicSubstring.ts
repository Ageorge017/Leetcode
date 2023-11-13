type SubstringLengths = Record<number, string[]>;

const isPalindrome = (substring: string) =>
  substring === substring.split("").reverse().join("");

function longestPalindrome(s: string): string {
  if (s.length === 1) return s;
  const substringLengthDict: SubstringLengths = {
    1: s.split(""),
  };
  let longestSubStrLength = 1;

  for (let p1 = 0; p1 < s.length; p1++) {
    for (let p2 = s.length - 1; p2 !== p1; p2--) {
      const s1 = s.charAt(p1);
      const s2 = s.charAt(p2);
      if (s1 === s2) {
        const substring = s.slice(p1, p2 + 1);
        const substrLength = p2 - p1 + 1;
        if (longestSubStrLength > substrLength) continue;
        if (isPalindrome(substring)) {
          if (!!substringLengthDict[substrLength])
            substringLengthDict[substrLength].push(substring);
          else substringLengthDict[substrLength] = [substring];
          longestSubStrLength =
            longestSubStrLength < substrLength
              ? substrLength
              : longestSubStrLength;
        } else {
          continue;
        }
      } else continue;
    }
  }

  return substringLengthDict[longestSubStrLength][0];
}

[
  "babad",
  "cbbd",
  "bbbbbb",
  "babbab",
  "a",
  "abc",
  "bab",
  "aa",
  "ac",
  "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee",
].forEach((str) => {
  try {
    const startTime = Date.now();
    const palindrome = longestPalindrome(str);

    console.log(
      `For string %c${str} %cthe longest palindrome is %c${palindrome}. %cTime taken ${
        Date.now() - startTime
      }`,
      "color:red;",
      "color:none;",
      "color:red;",
      "color:green;"
    );
  } catch (e) {
    console.error("Could not run palindrome for", str, e);
  }
});
