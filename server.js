var express = require('express')

var app = express()
var PORT = 3000

app.post('/call', function (req, res) {
  res.send('<?xml version="1.0" encoding="UTF-8"?><you tried to spam the wrong person my friend</Say></Response>')
})

console.log('starting on port ', PORT)
app.listen(PORT)