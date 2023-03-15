
const mongoose = require('mongoose')

// connect to db
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true })

// create schema
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})

// Create Mongoose model will create fruits
const Fruit = mongoose.model("Fruit", fruitSchema)

// create document in model
const fruit = new Fruit ({
  name: "Apple",
  rating: 7,
  review: "Would be better with caramel but still better than an orange."
})

fruit.save()
