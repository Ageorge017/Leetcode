const xorNumbersArray = (nums:number[]) => nums.reduce((previousNum, currentNum)=>previousNum^currentNum);

function singleNumber(nums: number[]): number {
    return xorNumbersArray(nums);
};
