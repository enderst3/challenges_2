'use strict';
// this is the logic behind the trick
// have the user choose a number then click the box the number is in
// after 3 times clicking take the 11th number in the list and display it


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
    document.getElementById("displayOne").innerHTML = group1.join(" ")
    document.getElementById("displayTwo").innerHTML = group2.join(" ")
    document.getElementById("displayThree").innerHTML = group3.join(" ")
}

// Use .concat() once group is picked assemble new list
function assembleNewList() {
    if (group1) {
        let newList = group2.concat(group1, group3)
    } else if (group2) {
        let newList = group1.concat(group2, group3)
    } else {
        let newList = group1.concat(group3, group2)
    }
    dealNumbers(newList)
}


// pick the final number
function pickNumber() {
    return newList[10]
}