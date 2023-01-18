// array of buttons
let buttonColors = ["red", "blue", "yellow", "green"]

// Pattern array
let gamePattern = []

// user clicked Pattern
let userClickedPattern = []

// Set game started to false
let gameStarted = false

// keepl track of levels
let level = 0

// Detect key press
$(document).keydown(function() {
  // Check to see if gameStarted
  if (!gameStarted) {
    // Change the title to level number
    $("#level-title").text("Level " + level)
    // Run game
    nextSequence()
    // Set game started to true
    gameStarted = true
  }
})

// target btn clicks
$(".btn").click(function() {
  // use the id attribute of the btn clicked
  let userChosenColor = $(this).attr("id")
  // push the id color to the user click pattern
  userClickedPattern.push(userChosenColor)
  // play sound assoicated with color
  playSound(userChosenColor)
  animatePress(userChosenColor)

  // Call checkAnswer after user has clicked and chosen checkAnswer
  // pass in the index of last answer in sequence
  checkAnswer(userClickedPattern.length - 1)
})


function nextSequence() {
  // Makesure userClickedPattern is empty so we can check Pattern
  userClickedPattern = []
  // Set level
  level++
  // Update level on screen
  $("#level-title").text("Level " + level)
  // random number generator
  let randomNumber = Math.floor(Math.random() * 4)
  // Use randomNumber to get button buttonColors
  let randomChosenColor = buttonColors[randomNumber]
  // push randomChosenColor to the end of the gamePattern array
  gamePattern.push(randomChosenColor)
  // Animate button in the sequence
  $("#" + randomChosenColor).fadeOut(100).fadeIn(100)
  // play sound assoicated with button button
  playSound(randomChosenColor)
}

function playSound(chosenColor) {
  // play sound assoicated with color
  let audio = new Audio("sounds/" + chosenColor + ".mp3")
  audio.play()
}

// Add animation to the button when pressed
function animatePress(chosenColor) {
  // add and remove class of pressed, and use timeout for a delay
  $("." + chosenColor).addClass("pressed")
  setTimeout(() => {
    $("." + chosenColor).removeClass("pressed");
  }, 100)
}

// Create function to check the answer seqence
function checkAnswer(currentLevel) {

  // If statement compare pattern lists to see if the are the same.
  if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
    console.log("success")

    // Check to see if the rest of the sequence is correct
    if (userClickedPattern.length === gamePattern.length) {
       //call nextSequence with short delay
       setTimeout(function () {
         nextSequence()
       }, 1000)
    }
  } else {
    console.log("wrong")
    // play wrong sound from sounds file
    playSound("wrong")
    // add game over animation to body
    $("body").addClass("game-over")
    setTimeout(function () {
      $("body").removeClass("game-over")
    }, 200)
    // Change h1 title to say game over and press key to start Over
    $("#level-title").text("Game Over, Press Any Key to Restart")
    // reset variables by calling start over
    startOver()
  }
}

// Start over function to reset varibles
function startOver() {
  gamePattern = []
  gameStarted = false
  level = 0
}
