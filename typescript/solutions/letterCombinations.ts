export function letterCombinations(digits: string): string[] {
  const digitLength = digits.length;
  if (digitLength === 0) return [];
  const numberLetterMap: Record<number, string[]> = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  if (digitLength === 1) return numberLetterMap[digits];
  const answer: string[] = [];

  const dfs = (index, str) => {
    if (index === digitLength) {
      answer.push(str);
    } else {
      let letters = numberLetterMap[digits[index]];
      for (let i = 0; i < letters.length; i++) dfs(index + 1, str + letters[i]);
    }
    return;
  };

  dfs(0, "");

  return answer;
}
