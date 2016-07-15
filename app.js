var express = require('express')
var path = require('path')
var app = express()

app.use(express.static(path.join(__dirname, 'dist')))
app.get('/', require('./controllers/index'))

app.listen(3000, function () {
  console.log('Server running')
})
