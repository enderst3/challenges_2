// Copy and past in console


alert("Hello");
alert("World");

2+3;

alert(2+3);

typeof(25);

typeof("Hello");

typeof(true);

Variables

var
const
let

const name = prompt("What is your name?");

alert(name);

// Challenge 1

function test() {
    var a = "3";
    var b = "8";

/***********Do not change the code above 👆*******/
//Write your code on lines 7 - 9:

// Destructuring solution
//[a,b] = [b,a];

// Using an extra Variable
var c = a;
var a = b;
var b = c;


/***********Do not change the code below 👇*******/

    console.log("a is " + a);
    console.log("b is " + b);
}


//Strings

alert ("Hello" + " World");

const message = "Hello";
let name = prompt("What is your name? ");

alert(message + " there " + name)

const word = "Hello"

console.log(word.length);


let tweet = prompt("Enter your tweet: ");
let tweetCount = tweet.length;
let charactersLeft = tweetCount - 140

console.log("Your tweet was " + tweetCount  + " characters long, you have " + charactersLeft + " left.")

let name = "Johnny"
name.slice(3,)

let tweet = prompt("Enter your tweet: ");
let tweetUnder140 = tweet.slice(0, 140);
alert(tweetUnder140);

let name = "Johnny";
let allCaps = name.toUpperCase();

let name = "johnny";
let firstChar = name.slice(0,1);
let restOfName = name.slice(1,);
let capFirstChar = firstChar.toUpperCase();
let lowerRestOfName = restOfName.tolowerCase()
let formatName = capFirstChar + restOfName;
console.log(formatName);

// Integers

9+6
9-6
9*6
9/6
9%6

// Functions

/**
 * Welcome to the Stanford Karel IDE.
 * This is a free space for you to
 * write any Karel program you want.
 **/
function main(){
   //your code here
   goInCircle();
}

function goInCircle() {
   move();
   turnLeft();
   move();
   turnLeft();
   move();
   turnLeft();
   move();
   turnLeft();
}

function main(){
   //your code here
   quarterCircle();
   quarterCircle();
   quarterCircle();
   quarterCircle();
}

function quarterCircle() {
   move();
   turnLeft();
}
