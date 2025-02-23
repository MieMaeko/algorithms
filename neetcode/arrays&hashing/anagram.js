// Given two strings s and t, return true if the two strings are anagrams of each other, otherwise return false.
// An anagram is a string that contains the exact same characters as another string, but the order of the characters can be different.

// Example 1:
// Input: s = "racecar", t = "carrace"
// Output: true

// Example 2:
// Input: s = "jar", t = "jam"
// Output: false

function isAnagram(s, t) {
    if (s.length !== t.length) {
        return false;
    }
    let sSort = s.split("").sort().join();
    let tSort = t.split("").sort().join();
    return sSort == tSort
}
function isAnagram2 (s,t) {
    
}
const s = "jar";
const t = "jam";
console.log(isAnagram(s, t))
const a = "racecar"
const b = "carrace"
console.log(isAnagram(a, b))
// const res = s.includes('a');
// console.log(res)

