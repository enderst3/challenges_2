const express = require("express")
const bodyParser = require("body-parser")
const date = require(__dirname + "/date.js")

const app = express()

const items= ["Buy Food"]
const workItems = []

app.set("view engine", "ejs")

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static("public"))

app.get("/", (req, res) => {
  let day = date.getDate()

  res.render("list", {
    listTitle: day,
    newListItems: items
  })
})

app.post("/", (req, res) => {

  let item = req.body.newItem

  if (req.body.list === "Work"){
    workItems.push(item)
    // trigger work route app.get work
    res.redirect("/work")
  } else {
    items.push(item)
    // trigger home route app.get home
    res.redirect("/")
  }
})

app.get("/work", (req,res) => {
  res.render("list", {
    listTitle: "Work List",
    newListItems: workItems
  })
})

app.get("/about", (req, res) => {
  res.render("about")
})

app.post("/work", (req,res) => {
  let item = req.body.newListItem
  workItems.push(item)
  res.redirect("/work")
})

app.listen(3000, (req, res) => {
  console.log("server started on port 3000")
})
