var React = require("react")
var ReactDOMServer = require('react-dom/server')
var CommentBox = require('../../components/CommentBox.jsx')
require('../../../sass/main.scss')

module.exports = function (props) {
  var appRender = { __html: ReactDOMServer.renderToString(<CommentBox data={props}/>) }
  var appProps = { __html: 'var APP_PROPS = ' + JSON.stringify(props) }

  var html = ReactDOMServer.renderToStaticMarkup(
    <html lang="en">
    <head>
      <title>MY APP</title>
    </head>
    <body>
      <div id="container" dangerouslySetInnerHTML={appRender}/>
      <script dangerouslySetInnerHTML={appProps}/>
      <script src="/js/bundle.js"></script>
    </body>
    </html>
  )
  return '<!DOCTYPE html>' + html
}
