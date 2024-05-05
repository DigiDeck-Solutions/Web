require('dotenv').config()
const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
})

console.log(process.env.secret);

app.listen(3000,()=>{
  console.log("server is running");
})
