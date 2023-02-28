const MongoClient = require("mongodb").MongoClient
const assert = require('assert')

// Connection URL
const url = 'mongodb://localhost:27017'

// Database Name
const dbName = 'myproject'

// Create a new MongoClient
const client = new MongoClient(url)

// Use connect metho to connect to the sever
client.connect(function(err) {
  assert.equal(null, err)
  console.log("Connected successfuly to server")

  const db = client.db(dbName)

  client.close()
})
