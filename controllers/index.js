var express = require('express')
var router = express.Router()
var path = require('path')

module.exports = function indexController (req, res) {
   res.sendFile(path.join(__dirname, '../public/html/index.html'))
}
