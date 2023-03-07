const mongoose =  require("mongoose")
const User = require("./User")

mongoose.connect("mongodb://localhost:27017/mbDB")


run()
async function run() {
    try {
        const user = await User.create({ 
            name: "Kyle", 
            age: 26,
            email: "Test@test.com",
            hobbies: ["Guitars", "Kayaking"], 
            address: {
            street: "Main St",
            city: "Big city"
          }
        })
        // display table
        // const a = await User.find()
        // console.log(a)
        console.log(user)  
    }   catch (error) {
        console.log(error.message)
    }
}
   
//     // change name
//     user.name = "Sally"
//     await user.save()
//     console.log(user)


