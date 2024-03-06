const mergeArraysAndJoin = (arr1: string[], arr2: string[]): string => {
  return arr1.reduce((combinedString, current, index) => {
    return `${combinedString}${current}${arr2[index]}`;
  }, "");
};

export function mergeAlternately([word1, word2]: [string, string]): string {
  if (word1.length > word2.length) {
    const suffix = word1.slice(word2.length);
    const prefix = word1.slice(0, word2.length);
    const biggerWord = prefix.split("");
    const smallerWord = word2.split("");
    return mergeArraysAndJoin(biggerWord, smallerWord) + suffix;
  }

  if (word1.length < word2.length) {
    const suffix = word2.slice(word1.length);
    const prefix = word2.slice(0, word1.length);
    const biggerWord = prefix.split("");
    const smallerWord = word1.split("");
    return mergeArraysAndJoin(smallerWord, biggerWord) + suffix;
  }

  return mergeArraysAndJoin(word1.split(""), word2.split(""));
}
