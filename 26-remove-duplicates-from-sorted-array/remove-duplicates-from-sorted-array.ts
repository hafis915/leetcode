function removeDuplicates(nums: number[]): number {
    let k = 0;
    let insert = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i - 1] != nums[i]) {
            nums[insert] = nums[i];
            insert++;
        }
    }

    return insert;
};