function checkStraightLine(coordinates: number[][]): boolean {    
  const pointSlopeFunction = getFunction(coordinates);
  return coordinates.reduce<boolean>((previous, [x, y])=>{
    return pointSlopeFunction(x,y) && previous;
  }, true) || isVerticalLine(coordinates)
};

const getFunction = (coordinates: number[][]):(x: number, y: number)=>boolean => {
    const m = getSlope(coordinates);
    const b =getYIntercept(m, coordinates);
    return (x, y) => {
      return  y === (m * x) + b;
    };
}
const isVerticalLine = (coordinates: number[][]):boolean => {
  const xSet = new Set(coordinates.map((coordinate)=>coordinate[0]));
  return xSet.size === 1
}

const getSlope = (coordinates: number[][]):number => {
    const [[x1, y1], [x2, y2]] = coordinates;
    return (y2-y1)/(x2-x1);
}

const getYIntercept = (m:number, coordinates: number[][]):number => {
  const [[x ,y]] = coordinates;
  return y - (m * x);
}
