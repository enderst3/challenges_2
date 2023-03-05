const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost:27017/fruitsDB")

// build schema
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})


// Create model
const Fruit = mongoose.model("Fruit", fruitSchema)

// create entry
const fruit = new Fruit ({
  name: "Apple",
  rating: 8,
  review: "Great fruit.  Will eat more"
})

// save entry
fruit.save()

const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('fruits');
  // Find some documents
  collection.find({}).toArray(function(err, fruits) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(fruits)
    callback(fruits);
  });
}
