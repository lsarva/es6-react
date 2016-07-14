import React from 'react'
import ReactDOM from 'react-dom'
import CommentBox from 'components/CommentBox'

ReactDOM.render(<CommentBox data={window.APP_PROPS}/>, document.getElementById('container'))
