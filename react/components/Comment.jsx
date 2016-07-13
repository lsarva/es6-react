var React = require("react")

module.exports = React.createClass({
  render () {
    return (
      <div className='comment'>
        <h2 className='commentAuthor'>
          {this.props.author}
        </h2>
        <span> {this.props.children.toString()} </span>
      </div>
    )
  }
})
