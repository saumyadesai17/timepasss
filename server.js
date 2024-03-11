const http = require('http')
const fs =  require('fs')
const express = require('express')
const dotenv = require('dotenv')

const port = 80;
const app = express()

const file = fs.readFileSync('index.html','utf-8')

app.get('/', (req, res) => {
    res.send(file)
    // res.send("HELLO WORLD")
})

app.listen(process.env.PORT, ()=>{
    console.log(`SERVER STARTED ON PORT ${port}`)
})