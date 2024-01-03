export function divide(nums: number[]): number {
  const range = 2147483648;
  const [dividend, divisor] = nums;
  if (dividend === divisor) return 1;

  let signedQuotient = 0;

  if (divisor === 1) signedQuotient = dividend;
  if (divisor === -1) signedQuotient = 0 - dividend;

  const absDividend = Math.abs(dividend);
  const absDivisor = Math.abs(divisor);
  if (dividend === 0 || absDividend < absDivisor) return 0;
  if (absDividend === absDivisor) return -1;
  if (signedQuotient === 0) {
    const sign = getQuotientSign(dividend, divisor);
    const quotient = subtractLoop(absDividend, absDivisor);

    signedQuotient = sign === "negative" ? 0 - quotient : quotient;
  }
  return signedQuotient > range - 1
    ? range - 1
    : signedQuotient < 0 - range
    ? 0 - range
    : signedQuotient;
}

function subtractLoop(minuend: number, subtrahend: number): number {
  let count = 0;
  for (let i = subtrahend; i <= minuend; i = i + subtrahend) {
    count = count + 1;
  }
  return count;
}

function getQuotientSign(dividend: number, divisor: number): Sign {
  let sign: Sign = "positive";
  if ((dividend < 0 && divisor >= 0) || (dividend >= 0 && divisor < 0))
    sign = "negative";
  return sign;
}

type Sign = "positive" | "negative";
