//3749
//MMMDCCXLIX
// 3000, 700, 40, 9

export function intToRoman(num: number): string {
  const numericalValues = [
    1, 4, 5, 9, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000,
  ];

  const intRomanMap = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  if (numericalValues.includes(num)) return intRomanMap[num];

  let remainder = num;
  let romanString = "";

  for (let i = numericalValues.length; i > 0; i--) {
    if (remainder === 0) {
      return romanString;
    }

    const multiplier = ~~(remainder / numericalValues[i - 1]);
    if (multiplier === 0) continue;
    remainder = remainder % numericalValues[i - 1];

    romanString =
      romanString + intRomanMap[numericalValues[i - 1]].repeat(multiplier);
  }
  return romanString;
}
