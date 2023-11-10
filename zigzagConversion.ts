enum Direction {
  UP = "up",
  DOWN = "down",
}

function convert(s: string, numRows: number): string {
  const rows: Record<number, string[]> = {};
  const switchToUpKey = numRows - 1;
  const switchToDownKey = 0;
  let counter = 0;
  let currentDirection = Direction.DOWN;

  for (let i = 0; i < s.length; i++) {
    rows[counter] ||= [];
    rows[counter].push(s[i]);
    counter = currentDirection === Direction.DOWN ? counter + 1 : counter - 1;
    if (counter === switchToUpKey) {
      currentDirection = Direction.UP;
    } else if (counter === switchToDownKey) currentDirection = Direction.DOWN;
  }

  return Object.keys(rows).reduce((prev, current) => {
    return prev.concat(rows[current].join(""));
  }, "");
}
