import apiKey from "./urls.js"
import express from "express"
import https from "https"

// const express = require("express")
// const https = require("https")

const app = express()

app.get("/", (req, res) => {
  let query = "Green River"

  const url = "https://api.openweathermap.org/data/2.5/weather?q=" + query + "&appid=" + apiKey + "&units=imperial"
  https.get(url, (response) => {
    console.log(response.statusCode)

    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const conditions = weatherData.weather[0].description
      const icon = weatherData.weather[0].icon
      const imageURL = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
      res.write("<p> The weather is currently " + conditions + ".</p>");
      res.write("<h1>The temp is " + temp + " degrees fahrenheit.</h1>");
      res.write("<img src=" + imageURL + ">")
      res.send()
    })
  })

  // res.send("Server is up and running!")
})

app.listen(3000, () => {
  console.log("Sever is running on port 3000.")
})
