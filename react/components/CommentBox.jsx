var React = require("react")
var CommentList = require('./CommentList')
var CommentForm = require('./CommentForm')

module.exports = React.createClass({
  handleCommentSubmit (comment) {
    var data = this.state.data
    var id = this.state.data.length
    data.push({author: comment.author, text: comment.text, id: id + 1})
    this.setState({data: data})
  },
  getInitialState () {
    return {data: this.props.data ? this.props.data : []}
  },
  render () {
    return (
      <div className='commentBox'>
        <h1>Comments</h1>
        <CommentList data={this.state.data} />
        <CommentForm onCommentSubmit={this.handleCommentSubmit} />
      </div>
    )
  }
})
