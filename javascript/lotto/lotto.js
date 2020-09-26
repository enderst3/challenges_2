// check if item in array then add if not in
// let x = [1,2,3,4,5]
// let y = 7
// if(! x.includes(y)) {
//     x.push(y)
// }


// need to logic for amount of numbers to choose
// add logic if numbers have different ranges like powerball
// need to add powerball, megabucks, and oregon lotto buttons
// be able to buy tickets
// check for winners

// create list for random numbers based on number of picks and range
let lottoNumbers = []
// if there is an extra pick with different number range it will add to this list
let powerNumber = []
// set default picks
let picks = 0
// set default max
let max = 0
// set default addedMax
let addedMax = 0


// number gererator takes the max from input
function randomNumberGen() {
    console.log("picks: ",picks)
    // Make sure we get new numbers when get numbers is pushed
    lottoNumbers.length = 0
    powerNumber.length = 0
    // pick random numbers and check to see if in list before adding them
    // the +1 makes sure the max number is included
    while(lottoNumbers.length < picks) {
        // pick the numbers
        let randNum = Math.floor((Math.random() * max) + 1)
        // check to see if already picked before adding to list
        if(! lottoNumbers.includes(randNum)){
            lottoNumbers.push(randNum)
        }  
    }
    // pick extra ball if needed
    if(addedMax) {
        powerNumber.push(Math.floor((Math.random() * addedMax) + 1))
    }
    // sort numbers before displaying them
    // lottoNumbers.sort(function(a, b){return a - b})
    console.log(lottoNumbers.sort(function(a, b){return a - b}))
    console.log(powerNumber)
    picks = 0
    max = 0
    addedMax = 0
}

// make min and max for powerball
function powerBall() {
    picks = 5
    max = 59
    addedMax = 26
    randomNumberGen()

}

// make min and max for mega millions 
function megaMillions() {
    picks = 5
    max = 70
    addedMax = 25
    randomNumberGen()
}

// make min and max for megabucks
function oregonMegabucks() {
    picks = 6
    max = 48
    randomNumberGen()

}

function userPicks() {
    // get input on number of picks
    picks = Math.floor(document.getElementById('picks').value)
    // get the number range for the picks
    max = Math.floor(document.getElementById("max").value)
    // get imput on range of extra pick with different range
    addedMax = Math.floor(document.getElementById('addedMax').value)
    randomNumberGen()
}
