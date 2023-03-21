
const mongoose = require('mongoose')

// connect to server, look for db if not there create db
mongoose.connect("mongodb://localhost:27017/fruitsDB", { useNewUrlParser: true, useUnifiedTopology: true } )


// Create Schema for new collection
const fruitSchema = new mongoose.Schema ({
  name: {
    type: String,
    // required: [true, "Please check your data entry, no name specified!"]
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
  rating: 10,
  review: "Peaches come in a can, they were put there by a man."
})

// save new Fruit
// fruit.save()

const personSchema = new mongoose.Schema ({
  name: String,
  age: Number,
  favoriteFruit: fruitSchema
})

const Person = mongoose.model("Person", personSchema)

const strawberry = new Fruit({
  name: "Strawberry",
  rating: 8,
  review: "Awesome on pancakes."
})

strawberry.save()

Person.updateOne({name: "Johnny"}, {favoriteFruit: strawberry}, function(err){
  if (err) {
    console.log(err)
  } else {
    console.log("Updated Successfully")
  }
})

// const person = new Person ({
//   name: "Amy",
//   age: 10,
//   favoriteFruit: pineapple
//
// })

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

// Fruit.updateOne({ _id: '6417d35e9690d02cd493fa6e' }, {name: "Peach"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Updated Successfully.")
//   }
// })

// Fruit.deleteOne({ _id: "6417d30937ad2f2ca92741ff" }, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Successfully deleted.")
//   }
// })

// Fruit.deleteMany({ name: "Lime"}, function(err){
//   if (err){
//     console.log(err)
//   } else {
//     console.log("Successfully deleted.")
//   }
// })
