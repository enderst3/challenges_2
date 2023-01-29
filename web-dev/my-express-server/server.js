const express = require('express')
const app = express()

// start server
app.listen(3000, function() {
  console.log("Server started on port 3000")
})

app.get("/about", function(req, res) {
  res.send("Brief bio goes here.  It will be completed someday.")
})

// Bio route route
app.get("/contact", function(req, res) {
  res.send("Contact me at: me@gmail.com")
})

// Home route
app.get("/", function(req, res) {
  res.send("<h1>Hello World!</h1>")
})

// app.get('/', (req, res) => res.send("Hello World!"))
//
// app.listen(3000, () => console.log("Example app listening on port 3000!"))
