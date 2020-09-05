// check if item in array then add if not in
// let x = [1,2,3,4,5]
// let y = 7
// if(! x.includes(y)) {
//     x.push(y)
// }


// need to logic for amount of numbers to choose
// add logic if numbers have different ranges like powerball

// create list for random numbers based on number of picks and range
let lottoNumbers = []
// if there is an extra pick with different number range it will add to this list
let powerNumber = []
// get input on number of picks
let picks = Math.floor(document.getElementById('picks').value)
// get the number range for the picks
let max = Math.floor(document.getElementById("max").value)
// get imput on range of extra pick with different range
let addedMax = Math.floor(document.getElementById('addedMax').value)


// number gererator takes the max from input
function numberGen() {
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
}
