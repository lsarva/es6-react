var React = require("react")
var Comment = require('./Comment')

module.exports =  React.createClass({
  render () {
    return (
      <div>
        {
          this.props.data.map((comment, index) => {
            return (
              <Comment author={comment.author} key={comment.id}>
                {comment.text}
              </Comment>
            )
          })
        }
      </div>
    )
  }
})
