function getConcatenation(nums: number[]): number[] {
    let len = nums.length;
    const ans = new Array(len * 2);

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[len] = nums[i]
        len += 1;
    }

    return ans;
};