'use strict';

// Sample Input 
// javascriptloops
// Sample Output 
// a
// a
// i
// o
// o
// j
// v
// s
// c
// r
// p
// t
// l
// p
// s
// Explanation 0
// Observe the following:
// Each letter is printed on a new line.
// Then the vowels are printed in the same order as they appeared in .
// Then the consonants are printed in the same order as they appeared in .


/*
 * Complete the vowelsAndConsonants function.
 * Print your output using 'console.log()'.
 */
function vowelsAndConsonants(s) {
    // Create variables for vowels and empty string
    const vowels = 'aeiou';
    var consonants = '';
    
    // Loop through the input string and seperate the vowels.
    for(var i = 0; i < s.length; i++) {
        // Seperate vowels and log them first
       if (vowels.includes(s[i])) {
           console.log(s[i]);
       }
       //  fill consonants putting each on a new line
       else {
           consonants += s[i] + '\n';
       }
    }
    // Log consonants using trim() to remove whitespace
    console.log(consonants.trim());
}