function insert(intervals: number[][], newInterval: number[]): number[][] {
  if (intervals.length === 0) return [newInterval]; // base cases
  let newIntervals: number[][] = [];
  let [y1, y2] = newInterval;
  let isY1LowerBound = false;
  let isX1LowerBound = false;
  let lowerBound: number | null = null;
  let isDone = false;
  let upperBound: number | null = null;

  for (let i = 0; i < intervals.length; i++) {
    const interval = intervals[i];
    const [x1, x2] = interval;

    // y1 of the new interval is a lowerbound
    if (((y1 <= x1 && !isX1LowerBound) || isY1LowerBound) && !isDone) {
      lowerBound = y1;
      //new interval falls to the left of the interval
      if (y2 < x1) {
        upperBound = y2;
        newIntervals.push([lowerBound, upperBound], [x1, x2]);
        isDone = true;
      }
      // new interval overlaps so x2 is upperbound
      else if (x1 <= y2 && y2 <= x2) {
        upperBound = x2;
        newIntervals.push([lowerBound, upperBound]);
        isDone = true;
      }
      // y2 is outside the range of current interval, check next interval. Don't need a condition to this since we repeat with new interval and we have a lower bound

      isY1LowerBound = true;
    }

    // x1 of the interval is a lowerbound
    else if (
      ((x1 < y1 && y1 <= x2 && !isY1LowerBound) || isX1LowerBound) &&
      !isDone
    ) {
      lowerBound = lowerBound ?? x1;
      // y2 is the upperbound
      if (y2 < x1) {
        upperBound = y2;
        newIntervals.push([lowerBound, upperBound], [x1, x2]);
        isDone = true;
      } else if (x1 <= y2 && y2 <= x2) {
        // x2 is the upperbound
        upperBound = x2;
        newIntervals.push([lowerBound, upperBound]);
        isDone = true;
      }
      // y2 is outside the range of the current interval. Don't need a condition since we repeat with new interval and we have a lower bound.
      isX1LowerBound = true;
    }
    // did not find lowerbound moving to next interval
    else {
      newIntervals.push(interval);
    }
  }
  if (upperBound !== null) {
    upperBound = y2;
    lowerBound = lowerBound ?? y1;
    newIntervals.push([lowerBound, upperBound]);
  }
  return newIntervals;
}

const runTest = () => {
  const testCases = [
    {
      caseNumber: `test_1`,
      intervals: [
        [1, 2],
        [3, 5],
        [6, 7],
        [8, 10],
        [12, 16],
      ],
      newInterval: [4, 8],
    },
    {
      caseNumber: `test_2`,
      intervals: [
        [1, 3],
        [6, 9],
      ],
      newInterval: [2, 5],
    },
    {
      caseNumber: `test_3`,
      intervals: [
        [2, 3],
        [6, 9],
      ],
      newInterval: [1, 15],
    },
    {
      caseNumber: `test_4`,
      intervals: [[1, 5]],
      newInterval: [2, 7],
    },
    {
      caseNumber: `test_5`,
      intervals: [[1, 5]],
      newInterval: [0, 0],
    },
  ];

  const blah = testCases.map(({ caseNumber, intervals, newInterval }) => {
    return { [`${caseNumber}`]: insert(intervals, newInterval) };
  });
  console.log(blah);
};
console.clear();
runTest();
