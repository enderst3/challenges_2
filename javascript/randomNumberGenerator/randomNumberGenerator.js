function numberGen() {
    let min = Math.ceil(document.getElementById("min").value)
    let max = Math.floor(document.getElementById("max").value)
    // Make sure both max and min are included the +1 makes sure the max is included
    let randNum = Math.floor((Math.random() * (max - min + 1)) + min)
    document.getElementById("displayThree").innerHTML = randNum
}