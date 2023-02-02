const express = require("express")
const bodyParser = require("body-parser")
const request = require("request")
const https = require("https")

let app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended: true}))

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/signup.html")
})

app.post("/", (req, res) => {
  let firstName = req.body.fName
  let lastName = req.body.lName
  let email = req.body.email
  const apiKey = { your api key }
  const listID = { Your list id }

  let data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: {
          FNAME: firstName,
          LNAME: lastName
        }
      }
    ]
  }
  let jsonData = JSON.stringify(data)

  const url = "https://us21.api.mailchimp.com/3.0/lists/" + listID

  const options = {
    method: "POST",
    auth: "me1:" + apiKey
  }

  let request = https.request(url, options, (response) => {

    if (response.statusCode === 200) {
      res.sendFile(__dirname + "/success.html")
    } else {
      res.sendFile(__dirname + "/failure.html")
    }

    // response.on("data", (data) => {
    //   console.log(JSON.parse(data))
    // })
  })

  request.write(jsonData)
  request.end()

})

app.post("/failure", (req, res) => {
  res.redirect("/")
})

app.listen(process.envPORT || 3000, () => {
  console.log("server started on port 3000!")
})
