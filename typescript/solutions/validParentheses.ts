export function isValid(s: string): boolean {
  if (s.length % 2 !== 0) return false;
  const stack: string[] = [];
  const openingBrackets = ["(", "{", "["];
  const sArray = s.split("");
  for (let i = 0; i < sArray.length; i++) {
    const element = sArray[i];
    const hasOpenBracket = openingBrackets.includes(element);
    if (hasOpenBracket) stack.push(element);
    else {
      if (stack.length === 0) return false;
      const openElement = stack.pop();
      if (openElement === "(" && element !== ")") return false;
      if (openElement === "{" && element !== "}") return false;
      if (openElement === "[" && element !== "]") return false;
    }
  }
  return stack.length === 0;
}
