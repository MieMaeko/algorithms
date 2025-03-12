// Given an integer array nums and an integer k, return the k most frequent elements within the array.
// The test cases are generated such that the answer is always unique.
// You may return the output in any order.

// Example 1:
// Input: nums = [1,2,2,3,3,3], k = 2
// Output: [2,3]

// Example 2:
// Input: nums = [7,7], k = 1
// Output: [7]

function topKFrequent(nums, k) {
    const table = {};
    for(let num of nums){
        if(!table[num]) {
            table[num] = 0;
        } 
        table[num] +=1;
    }
    const answer = [];
    for(let key in table) {
        if(table[key]>=k || nums.length<=k){
            if(answer.length<=k){
                answer.push(key)
            }
        }
    }
    console.log(table)
    console.log(answer)
}
topKFrequent([5,3,1,1,1,3,5,73,1], 3)