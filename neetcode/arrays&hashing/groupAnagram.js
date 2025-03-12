// Given an array of strings strs, group all anagrams together into sublists. You may return the output in any order.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.
// Example 1:
// Input: strs = ["act","pots","tops","cat","stop","hat"]
// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]

function groupAnagrams(strs) {
    const res = {};
        for (let s of strs) {
            const sortedS = s.split('').sort().join('');
            if (!res[sortedS]) {
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
        return Object.values(res);
  
}
function hashAnagrams(strs){
    const table = {};
    for (let s of strs) {
        const count = new Array(26).fill(0);
        for (let c of s) {
            count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }
        const key = count.join(',');
        if (!table[key]) {
            table[key] = [];
        }
        table[key].push(s);
    }
    return Object.values(table);
}
console.log(groupAnagrams(["act","pots","tops","cat","stop","hat"]))
debugger;