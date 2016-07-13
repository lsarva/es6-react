var React = require("react")
var ReactDOMServer = require('react-dom/server')
var CommentBox = require('../../components/CommentBox.jsx')

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
    </body>
    </html>
  )
  return '<!DOCTYPE html>' + html
}