const express = require('express')
const app = express()

// app.listen(3000, function() {
//   console.log("Server started on port 3000")
// })

app.get('/', (req, res) => res.send("Hello World!"))

app.listen(3000, () => console.log("Example app listening on port 3000!"))
