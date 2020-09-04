// check if item in array then add if not in
// let x = [1,2,3,4,5]
// let y = 7
// if(! x.includes(y)) {
//     x.push(y)
// }


// need to logic for amount of numbers to choose
// add logic if numbers have different ranges like powerball


let lottoNumbers = []
let powerNumber = []
let picks = Math.floor(document.getElementById('picks').value)
let max = Math.floor(document.getElementById("max").value)
let addedMax = Math.floor(document.getElementById('addedMax').value)


// number gererator takes the max from input
function numberGen() {
    // the +1 makes sure the max number is included
    //
    console.log(picks, max, addedMax)
    while(lottoNumbers.length < picks) {
        let randNum = Math.floor((Math.random() * max) + 1)
        if(! lottoNumbers.includes(randNum)){
            lottoNumbers.push(randNum)
        }  
    }

    if(addedMax) {
        powerNumber.push(Math.floor((Math.random() * addedMax) + 1))
        console.log(powerNumber)
    }
    console.log(lottoNumbers)
    
    
}
