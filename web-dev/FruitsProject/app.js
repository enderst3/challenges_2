
const mongoose = require('mongoose')

// connect to server, look for db if not there create db
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true } )


// Create Schema for new collection
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    required: [true, "Please check your data entry, no name specified!"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10
  },
  review: String
})

// Create mongoos model
// specify singular name.  Will creat a collection of plural items
const Fruit = mongoose.model("Fruit", fruitSchema)

// add entry to model
let fruit = new Fruit({
  name: "Lime",
  rating: 10,
  review: "They make my gin and tonic taste sooooooo good!"
})

// save new Fruit
fruit.save()

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number
})

const Person = mongoose.model("Person", personSchema)

const person = new Person ({
  name: "Johnny",
  age: 32
})

// person.save()

// const kiwi = new Fruit({
//   name: "Kiwi",
//   rating: 10,
//   review: "The best brown and furry fruit around!"
// })
//
// const orange = new Fruit({
//   name: "Orange",
//   rating: 1,
//   review: "Can I give it a negative review?"
// })
//
// const banana = new Fruit({
//   name: "Banana",
//   rating: 10,
//   review: "Goes great with peanutbutter.  Just ask Elivs!"
// })

// save all new fruit to db
// Fruit.insertMany([kiwi, orange, banana], function(err){
//   if(err) {
//     console.log(err)
//   } else {
//     console.log("Successfully saved all the fruits to the fruitsDB")
//   }
// })

Fruit.find(function(err, fruits){
  if (err) {
    console.log(err)
  } else {
    // close connection if no errors and we are done with the server
    mongoose.connection.close()
    // console.log(fruits)
    fruits.forEach(function(fruit) {
      console.log(fruit.name)
    })
  }
})
