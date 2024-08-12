require ('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twiter', (req, res) => {
    res.send("Hello from twiter page")
})

app.get('/login', (req, res) => {
    res.send("<h1> Wecome to login page</h1>")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})