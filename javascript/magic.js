'use strict';

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 
    11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]


// creat loop for picks
let picks = 3

// Sort numbers into 3 groups
function dealNumbers() {
    let group1 = numbers.filter((element, index) => {
        return index % 3 === 0
    })

    let group2 = numbers.filter((element, index) => {
        return index % 3 === 1
    })

    let group3 = numbers.filter((element, index) => {
        return index % 3 === 2
    })
}

// Use .concat() once group is picked assemble new list
function assembleNewList() {
    if (group1) {
        return newList = group2.concat(group1, group3)
    } else if (group2) {
        return newList = group1.concat(group2, group3)
    } else {
        return newList = group1.concat(group3, group2)
    }
}


// pick the final number
function pickNumber() {
    return newList[10]
}