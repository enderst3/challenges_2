const express = require("express")
const bodyParser = require("body-parser")

const app = express()

let item = ""

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  let today = new Date()

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long"
  }

  let day = today.toLocaleDateString("en-US", options)


  res.render("list", {
    kindOfDay: day,
    newListItem: item
  })
})

app.post("/", (req, res) => {
  item = req.body.newItem
  // console.log(item)
  // trigger app.get and pass in item
  res.redirect("/")
})

app.listen(3000, (req, res) => {
  console.log("server started on port 3000")
})
