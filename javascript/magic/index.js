'use strict';
// this is the logic behind the trick
// have the user choose a number then click the box the number is in
// after 3 times clicking take the 11th number in the list and display it


//  create numbers arrays
let numbers1 = [1, 2, 3, 4, 5, 6, 7]
let numbers2 = [8, 9, 10, 11, 12, 13, 14]
let numbers3 = [15, 16, 17, 18, 19, 20, 21]

// create loop for picks
let picks = 3

// display and greeting numbers on page load
function initialDisplay() {
    document.getElementById("displayOne").innerHTML = numbers1.join(" ")
    document.getElementById("displayTwo").innerHTML = numbers2.join(" ")
    document.getElementById("displayThree").innerHTML = numbers3.join(" ")

    if (picks === 3) {
        document.getElementById("displayGreeting").innerHTML = "Pick a number between 1 and 21."
        document.getElementById("pickAgain").innerHTML = "Then click on the box your number is in."
        document.getElementById("displayPick").innerHTML = ""
    }
}

// Sort numbers into 3 groups
function dealNumbers(newList) {
    console.log(picks)
    if (picks !== 0) {
        document.getElementById("pickAgain").innerHTML = "Click on the box your number is in again."
        document.getElementById("displayGreeting").innerHTML = ""
        document.getElementById("displayPick").innerHTML = ""
        
        let group1 = newList.filter((element, index) => {
            return index % 3 === 0
        })
        let group2 = newList.filter((element, index) => {
            return index % 3 === 1
        })
        let group3 = newList.filter((element, index) => {
            return index % 3 === 2
        })
        document.getElementById("displayOne").innerHTML = group1.join(" ")
        document.getElementById("displayTwo").innerHTML = group2.join(" ")
        document.getElementById("displayThree").innerHTML = group3.join(" ")
    } else {
        pickNumber(newList)
    }
}

// Use .concat() once group is picked assemble new list
function assembleNewList(id) {
    picks -= 1
    
    let group1 = document.getElementById("displayOne").innerText.split(" ").map(Number)
    let group2 = document.getElementById("displayTwo").innerText.split(" ").map(Number)
    let group3 = document.getElementById("displayThree").innerText.split(" ").map(Number)
    if (id === "displayOne") {
        let newList = group2.concat(group1, group3)
        dealNumbers(newList)
    } else if (id === "displayTwo") {
        let newList = group1.concat(group2, group3)
        dealNumbers(newList)
    } else if (id === "displayThree") {
        let newList = group1.concat(group3, group2) 
        dealNumbers(newList) 
    }
}

// Display the final number
function pickNumber(newList) {
    let pick = newList[10]
    console.log(pick)
    document.getElementById("pickAgain").innerHTML = "Is the number you picked."
    document.getElementById("displayPick").innerHTML = pick
   
}