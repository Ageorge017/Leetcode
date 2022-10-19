const setMax = (currentMax: number, array: string[]) =>
  currentMax > array.length ? currentMax : array.length;
function lengthOfLongestSubstring(s: string): number {
  const stringArr = Array.from(s);
  if (stringArr.length <= 1) return stringArr.length;
  let substrArray: string[] = [stringArr[0]];
  let max = 1;
  let pointer = 1;

  while (pointer < stringArr.length) {
    const dupIndex = substrArray.indexOf(stringArr[pointer]);
    if (dupIndex > -1) {
      substrArray.splice(0, dupIndex + 1);
    } else {
      substrArray.push(stringArr[pointer]);
      pointer++;
      max = setMax(max, substrArray);
    }
  }
  return max;
}
