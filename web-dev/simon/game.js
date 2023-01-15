// array of buttons
let buttonColors = ["red", "blue", "yellow", "green"]

// Pattern array
let gamePattern = []

// user clicked Pattern
let userClickedPattern = []

// target btn clicks
$(".btn").click(function() {
  // use the id attribute of the btn clicked
  let userChosenColor = $(this).attr("id")
  // push the id color to the user click pattern
  userClickedPattern.push(userChosenColor)
  // play sound assoicated with color
  playSound(userChosenColor)
  animatePress(userChosenColor)
})


function nextSequence() {
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
