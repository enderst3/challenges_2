const express = require("express")
const https = require("https")

const app = express()

app.get("/", (req, res) => {
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.62&lon=-109.46&appid=96248b485fca8f84065e794b16e74f1d&units=imperial"
  https.get(url, (response) => {
    console.log(response.statusCode)

    response.on("data", (data) => {
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp
      const conditions = weatherData.weather[0].description
      const location = weatherData.name + ', ' + weatherData.sys.country
      console.log(temp)
      console.log(conditions)
      console.log(location)
    })
  })

  res.send("Server is up and running!")
})

app.listen(3000, () => {
  console.log("Sever is running on port 3000.")
})
