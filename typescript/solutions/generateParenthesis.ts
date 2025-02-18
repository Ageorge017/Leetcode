export function generateParenthesis(n: number): string[] {
  if (n === 1) return ["()"];
  if (n === 2) return ["()()", "(())"];

  return generateParenthesisHelper(["("], [")"], n - 1);
}

const generateParenthesisHelper = (
  mainStack: string[],
  closeStack: string[],
  count: number
) => {
  if (count === 0) {
    return mainStack.concat(closeStack).join("");
  }
  if (closeStack.length === 0) {
    return generateParenthesisHelper([...mainStack, "("], [")"], count - 1);
  }

  const copyOfCloseStack = [...closeStack];
  copyOfCloseStack.pop();

  return [
    generateParenthesisHelper(
      [...mainStack, "("],
      [...closeStack, ")"],
      count - 1
    ),
    generateParenthesisHelper([...mainStack, ")"], copyOfCloseStack, count),
  ].flat();
};
