'use strict';

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

let group1 = numbers.filter((element, index) => {
    return index % 3 === 0
})

let group2 = numbers.filter((element, index) => {
    return index % 3 === 1
})

let group3 = numbers.filter((element, index) => {
    return index % 3 === 2
})

console.log(group1);
console.log(group2);
console.log(group3);
