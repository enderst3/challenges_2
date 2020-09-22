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
// create lotto ticket
let lottoTicket = []
// create lotto ticket power number
let lottoTicketPowerNumber = []
// create winning numbers
let winningNumbers = lottoNumbers.sort(function(a, b){return a- b})
// get input on number of picks
let picks = Math.floor(document.getElementById('picks').value)
// get the number range for the picks
let max = Math.floor(document.getElementById("max").value)
// get imput on range of extra pick with different range
let addedMax = Math.floor(document.getElementById('addedMax').value)
// get input on number of tickets
let numberOfTickets = Math.floor(document.getElementById('numberOfTickets').value)
// Set up counter
let ticket = 0

// number gererator takes the max from input
function randomNumberGen() {

    // Make sure we get new numbers when get numbers is pushed
    lottoNumbers.length = 0
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

// make min and max for powerball
function powerBall() {

}

// make min and max for mega millions 
function megaMillions() {

}

// make min and max for megabucks
function oregonMegabucks() {

}
// Need to buy lotto ticket 
// function lottoTicketGen() {
//     // use ticket++ to add to counter
//     console.log(numberOfTickets)
//     console.log(ticket)
//     while(ticket < numberOfTickets) {
//         // Make sure we get new numbers when get numbers is pushed
//         lottoTicket.length = 0
//         // pick random numbers and check to see if in list before adding them
//         // the +1 makes sure the max number is included
//         while(lottoTicket.length < picks) {
//             // pick the numbers
//             let ticketRandNum = Math.floor((Math.random() * max) + 1)
//             // check to see if already picked before adding to list
//             if(! lottoTicket.includes(ticketRandNum)){
//                 lottoTicket.push(ticketRandNum)
//             }  
//         }
        
//         // sort numbers before displaying them
//         // lottoTicket.sort(function(a, b){return a - b})
//         console.log("lotto-ticket = ",lottoTicket.sort(function(a, b){return a - b}))
        
        
        
//         ticket++
//         console.log(ticket)
    
        
//         // need to clear ticket so it doesn't keep appending
//         // need to compare to lotto numbersy
//     }
// }