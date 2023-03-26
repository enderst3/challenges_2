//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");



const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb://0.0.0.0:27017/todolistDB", {useNewUrlParser: true, useUnifiedTopology: true})

const itemsSchema = {
  name: String
}

// Models are singular and capitalized
const Item = mongoose.model(
  "Item",
  itemsSchema
)

const item1 = new Item ({
  name: "Pick Up Food for the Week"
})

const item2 = new Item ({
  name: "Hit the + buttong to add a new item."
})

const item3 = new Item ({
  name: "<-- Hit this to delet an item."
})

const defaultItems = [item1, item2, item3]

const listSchema = {
  name: String,
  items: [itemsSchema]
}

const List = mongoose.model("List", listSchema)



app.get("/", function(req, res) {

  // find all items in collect
  Item.find({}, function(err, foundItems){
    if (foundItems.length === 0) {
      Item.insertMany(defaultItems, function(err){
        if (err) {
          console.log(err)
        } else {
          console.log("Items successfully saved to DB.")
        }
      })
      res.redirect("/")
    } else {
      res.render("list", {listTitle: "Today", newListItems: foundItems});
    }
  })
});

app.get("/:customListName", function(req, res){
  const customListName = req.params.customListName

  List.findOne({name: customListName}, function(err, foundList){
    if (!err) {
      if (!foundList){
        // create new list
        const list = new List({
          name: customListName,
          items: defaultItems
        })
        list.save()
        res.redirect("/" + customListName)
      } else {
        // show existing list
        res.render("list", {listTitle: foundList.name, newListItems: foundList.items})
      }
    }
  })

})

app.post("/", function(req, res){

  const itemName = req.body.newItem;
  const listName = req.body.list

  const item = new Item ({
    name: itemName
  })

  if (listName === "Today"){
    item.save()
    res.redirect("/")
  } else {
    List.findOne({name: listName}, function(err, foundList){
      foundList.items.push(item)
      foundList.save()
      res.redirect("/" + listName)
    })
  }
});

app.post("/delete", function(req, res){
  const checkedItemId = req.body.checkbox
  Item.findByIdAndRemove(checkedItemId, function(err){
    if (!err) {
      console.log("Successfully deleted checked item")
      res.redirect("/")
    }
  })
})

// app.get("/work", function(req,res){
//   res.render("list", {listTitle: "Work List", newListItems: workItems});
// });

app.get("/about", function(req, res){
  res.render("about");
});

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
