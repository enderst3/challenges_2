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

// Karel chess board

function main(){
   beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
   goUpTurnLeft();
   beepersLeft();
   goUpTurnRight();
      beepersRight();
}

function goUpTurnRight() {
   turnRight();
   move();
   turnRight();
}

function goUpTurnLeft() {
   turnLeft();
   move();
   turnLeft();
}

function beepersRight() {
   putBeeper();
   move();
   move();
   putBeeper();
   move();
   move();
   putBeeper();
}

function beepersLeft() {
   move();
   putBeeper();
   move();
   move();
   putBeeper();
   move();
}

// go to the store and buy milk
// milk is 1.5 use Math.floor() to round down

function getMilk(money) {
  console.log("leaveHouse");
  console.log("moveRight");
  console.log("moveRight");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveUp");
  console.log("moveRight");
  console.log("moveRight");

  let numberOfBottles = Math.floor(money / 1.5);

  console.log("Buy " + numberOfBottles + " bottles of milk.");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveDown");
  console.log("moveLeft");
  console.log("moveLeft");
  console.log("enterHouse");
}

getMilk(5);

// life in weeks

function lifeInWeeks(age) {
    let timeLeft = 90-age;
    let days = timeLeft*365;
    let weeks = timeLeft*52;
    let months = timeLeft*12;
    console.log("You have " + days + " days, " + weeks + " weeks, and " + months + " months left.")
}

// BMI Calculator

function bmiCalculator(weight, height) {
  let bmi = Math.round(weight / (height * height));
  // could also use Math.pow(height(2))
  if (bmi < 18.5) {
    return "Your BMI is " + bmi + ", so you are underweight."
  }
  if (bmi >= 18.5 && bmi <= 24.9) {
    return "Your BMI is " + bmi + ", so you have a normal weight."
  }
  if (bmi > 24.9) {
    return "Your BMI is " + bmi + ", so you are overweight."
  }



// love generator

prompt("What is your name? ");
prompt("What is the name of the person you love? ");

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

let loveScore = Math.random() * 100;
loveScore = Math.floor(loveScore) + 1;

if (loveScore > 70) {
  alert("Your love score is " + loveScore + "%.  You love each other like Harry loves Megan.")
}

if (loveScore > 30 && loveScore <= 70) {
  alert("Your love score is " + loveScore + "%");
}

if (loveScore <= 30) {
  alert("Your love score is " + loveScore + "%.  You go together like oil and water.")
}

// Conditionals

if else
===
!==
>
<
>=
<=


// Leap Year

function isLeap(year) {

  if (year % 4 === 0) {
    if (year % 100 === 0) {
      if (year % 400 === 0) {
        return "Leap year."
      } else {
        return "Not leap year."
      }
    } else {
      return "Leap year."
    }
  } else {
    return "Not leap year."
  }
}


// Arrays

let guestList = ["Jack", "Angela", "Pam", "Lara", "Jason"];

console.log(guestList);
console.log(guestList.length);
console.log(guestList[0]);

let guest = prompt("Enter your name. ")

if (guestList.includes(guest)) {
  console.log("yes")
}


// fizz buzz

for (var i = 1; i < 101; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  }
  if (i % 3 === 0) {
    console.log("Fizz")
  }
  if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i)
  }
}


// fizz buzz list output Functions
let output = [];
let count = 1;

function fizzBuzz() {
  if (count % 3 === 0 && count % 5 === 0) {
    output.push("FizzBuzz");
  }

  else if (count % 3 === 0) {
    output.push("Fizz");
  }
  else if (count % 5 === 0) {
    output.push("Buzz");
  } else {
    output.push(count)
  }
  count ++;
  console.log(output);
}
