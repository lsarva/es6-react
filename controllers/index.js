var template = require('../public/js/template.js')
var path = require('path')

module.exports = function indexController (req, res) {
  var data = [
	  {id: 1, author: 'Pete Hunt', text: 'This is one comment'},
	  {id: 2, author: 'Jordan Walke', text: 'This is *another* comment'}
	]
	var html = template(data)
  res.setHeader('Content-Type', 'text/html')
  res.end(html)
}
