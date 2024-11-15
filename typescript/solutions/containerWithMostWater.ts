export function maxArea(height: number[]): number {
  return height.reduce((previous, current, index) => {
    let newArea = 0;

    for (let i = index + 1; i < height.length; i++) {
      const width = i - index;
      const length = current > height[i] ? height[i] : current;

      const area = width * length;

      newArea = area > newArea ? area : newArea;
    }
    return previous >= newArea ? previous : newArea;
  }, 0);
}

export function maxAreaOptimized(height: number[]): number {
    let maxArea = 0;
    let left = 0;
    let right = height.length - 1;
    
    while (left < right) {
        const width = right - left;
        const length = height[left] > height[right] ? height[right] : height[left];
    
        const area = width * length;
    
        maxArea = area > maxArea ? area : maxArea;
    
        if (height[left] > height[right]) {
        right--;
        } else {
        left++;
        }
    }
    
    return maxArea;
}
