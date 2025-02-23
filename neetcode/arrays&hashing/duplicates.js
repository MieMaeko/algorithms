// Contains Duplicate
// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

// Example 1:
// Input: nums = [1, 2, 3, 3]
// Output: true

// Example 2:
// Input: nums = [1, 2, 3, 4]
// Output: false

const nums1 = [1, 2, 3, 3,4];
const nums2 = [1, 2, 3, 4];
function hasDuplicateSet(nums) {
    return new Set(nums).size < nums.length; 
}
function hasDuplicate(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] === nums[j]) {
                return true;
            }
        }
    }
    return false;
}
console.log(hasDuplicateSet(nums1));
console.log(hasDuplicateSet(nums2));
