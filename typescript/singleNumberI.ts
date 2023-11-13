type NumberInstances = Record<string, number>;

const countNumberInstances = (nums:number[]):NumberInstances => {
    let numberCount: NumberInstances = {};
    nums.forEach((num)=>{
        if(numberCount[num] === undefined) numberCount = {[num]: 1, ...numberCount}
        else numberCount[num]+=1;
    })
    return numberCount;
}

const findSingleNumberInstance = (counts: NumberInstances):number => {
    const allNumbers =  Object.keys(counts);
    const singleKey = allNumbers.filter((value)=>counts[value]===1)[0];
    return Number(singleKey);

}

function singleNumber(nums: number[]): number {
    if (nums.length === 1) return nums[0];
    const numberCounts = countNumberInstances(nums);
    return findSingleNumberInstance(numberCounts);
};
