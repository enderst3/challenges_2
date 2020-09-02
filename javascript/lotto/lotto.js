// check if item in array then add if not in
// let x = [1,2,3,4,5]
// let y = 7
// if(! x.includes(y)) {
//     x.push(y)
// }

// number gererator takes the max from input
function numberGen() {
    let max = Math.floor(document.getElementById("max").value)
    // the +1 makes sure the max is included
    let randNum = Math.floor((Math.random() * max) + 1)
    return randNum
}