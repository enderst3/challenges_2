

$("button").click(function() {
  $("h1").css("color", "purple")
})

$("input").keydown(function(event) {
  $("h1").text(event.key)
})


// best way
$("h1").on("mouseover", (function() {
  $("h1").css("color", "black")
}))
