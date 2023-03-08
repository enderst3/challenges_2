const mongoose = require('mongoose')


run()
async function run() {
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
  // const fruit = new Fruit ({
  //   name: "Apple",
  //   rating: 8,
  //   review: "Great fruit.  Will eat more"
  // })



  // save entry
  // fruit.save()

  const personSchema = new mongoose.Schema ({
    name: String,
    age: Number
  })

  const Person = mongoose.model("Person", personSchema)

  const person = new Person ({
    name: "Jack",
    age: 28
  })

  // person.save()

  const kiwi = new Fruit({
    name: 'Kiwi',
    score: 10,
    review: "The best brown furry fruit that is green inside!"
  })

  const lime = new Fruit({
    name: 'Lime',
    score: 11,
    review: "Makes almost everything better!  So good It goes to 11!"
  })

  const orange = new Fruit({
    name: 'Orange',
    score: 2,
    review: "I only like the juice, can't stand to eat one."
  })

  // Fruit.insertMany([kiwi, lime, orange])

    const allFruit = await Fruit.find({})
    console.log(allFruit)
}
