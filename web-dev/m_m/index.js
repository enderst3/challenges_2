import mongoose from "mongoose"
import Blog from "./model/Blog.js"

mongoose.connect("mongodb://localhost:27017/myFirstDatabase")

// // Create a blog object
// // const article = new Blog({
// // could also use to make it all at once
// const article = await Blog.create({
//     title: "Awesome Post!",
//     slug: 'awesome-post',
//     published: true,
//     content: "This is the best post ever!",
//     tags: ["fetured", "announcemnt"]
// })

// // // Insert article in mongodb
// // await article.save();

// // // find a single blog post
// // const firstAriticle = await Blog.findOne({})

// // change title
// article.title = "The Most Awesomest Post Ever!"
// await article.save()

// find blog by id
// const article = await Blog.findById("641274056038f0abdf9501bb").exec()

// to get only certain parts of the post
const article = await Blog.findById("641274056038f0abdf9501bb", "title slug content").exec()


// show article
console.log(article)