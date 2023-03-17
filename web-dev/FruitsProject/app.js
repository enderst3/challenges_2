
const mongoose = require('mongoose')

// connect to server, look for db if not there create db
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true } )


// Create Schema for new collection
const fruitSchema = new mongoose.Schema ({
  name: String,
  rating: Number,
  review: String
})

// Create mongoos model
// specify singular name.  Will creat a collection of plural items
const Fruit = mongoose.model("Fruit", fruitSchema)

// add entry to model
const fruit = new Fruit({
  name: "Apple",
  rating: 7,
  review: "Pretty good, would be better baked or with caramel, but still way better than an orange!"
})

// save new fruit
// fruit.save()

const personSchema = new mongoose.Schema({
  name: String,
  age: Number
})

const People = mongoose.model("Person", personSchema)

const person = new Person ({
  name: "Johnny Appleseed",
  age: 32
})

person.save()
