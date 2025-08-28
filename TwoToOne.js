// Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible,
//  containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// my solution 

function longest(s1,s2){
    return Array.from(new Set(s1+s2)).sort().join('')
}

// 2nd solution 

function longest(s1, s2) {
    
    return ([... new Set((s1 + s2).split("").sort())]).join('')
  }
