function twoSum(nums: number[], target: number): number[] {
    let myMap: {[key: number]: number} = {}; 
    for (let i = 0; i < nums.length; i++) {
        const x = target - nums[i];
        if (myMap[x] !== undefined) {
            return [i, myMap[x]];
        } else {
            myMap[nums[i]] = i;
        }
    }

    return null;
};