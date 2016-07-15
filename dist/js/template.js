module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var ReactDOMServer = __webpack_require__(2);
	var CommentBox = __webpack_require__(3);
	__webpack_require__(7);

	module.exports = function (props) {
	  var appRender = { __html: ReactDOMServer.renderToString(React.createElement(CommentBox, { data: props })) };
	  var appProps = { __html: 'var APP_PROPS = ' + JSON.stringify(props) };

	  var html = ReactDOMServer.renderToStaticMarkup(React.createElement(
	    'html',
	    { lang: 'en' },
	    React.createElement(
	      'head',
	      null,
	      React.createElement(
	        'title',
	        null,
	        'MY APP'
	      )
	    ),
	    React.createElement(
	      'body',
	      null,
	      React.createElement('div', { id: 'container', dangerouslySetInnerHTML: appRender }),
	      React.createElement('script', { dangerouslySetInnerHTML: appProps }),
	      React.createElement('script', { src: '/js/bundle.js' })
	    )
	  ));
	  return '<!DOCTYPE html>' + html;
	};

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("react-dom/server");

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);
	var CommentList = __webpack_require__(4);
	var CommentForm = __webpack_require__(6);

	module.exports = React.createClass({
	  displayName: 'exports',
	  handleCommentSubmit: function handleCommentSubmit(comment) {
	    var data = this.state.data;
	    var id = this.state.data.length;
	    data.push({ author: comment.author, text: comment.text, id: id + 1 });
	    this.setState({ data: data });
	  },
	  getInitialState: function getInitialState() {
	    return { data: this.props.data ? this.props.data : [] };
	  },
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'commentBox' },
	      React.createElement(
	        'h1',
	        null,
	        'Comments'
	      ),
	      React.createElement(CommentList, { data: this.state.data }),
	      React.createElement(CommentForm, { onCommentSubmit: this.handleCommentSubmit })
	    );
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var React = __webpack_require__(1);
	var Comment = __webpack_require__(5);

	module.exports = React.createClass({
	  displayName: "exports",
	  render: function render() {
	    return React.createElement(
	      "div",
	      null,
	      this.props.data.map(function (comment, index) {
	        return React.createElement(
	          Comment,
	          { author: comment.author, key: comment.id },
	          comment.text
	        );
	      })
	    );
	  }
	});

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',
	  render: function render() {
	    return React.createElement(
	      'div',
	      { className: 'comment' },
	      React.createElement(
	        'h2',
	        { className: 'commentAuthor' },
	        this.props.author
	      ),
	      React.createElement(
	        'span',
	        null,
	        ' ',
	        this.props.children.toString(),
	        ' '
	      )
	    );
	  }
	});

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(1);

	module.exports = React.createClass({
	  displayName: 'exports',

	  getInitialState: function getInitialState() {
	    return { author: '', text: '' };
	  },
	  handleAuthorChange: function handleAuthorChange(e) {
	    this.setState({ author: e.target.value });
	  },
	  handleTextChange: function handleTextChange(e) {
	    this.setState({ text: e.target.value });
	  },
	  handleSubmit: function handleSubmit(e) {
	    e.preventDefault();
	    var author = this.state.author.trim();
	    var text = this.state.text.trim();
	    if (!text || !author) {
	      return;
	    }
	    this.props.onCommentSubmit({ author: author, text: text });
	    this.setState({ author: '', text: '' });
	  },
	  render: function render() {
	    return React.createElement(
	      'form',
	      { className: 'commentForm', onSubmit: this.handleSubmit },
	      React.createElement('input', {
	        type: 'text',
	        placeholder: 'Your name',
	        value: this.state.author,
	        onChange: this.handleAuthorChange
	      }),
	      React.createElement('input', {
	        type: 'text',
	        placeholder: 'Say something...',
	        value: this.state.text,
	        onChange: this.handleTextChange
	      }),
	      React.createElement('input', { type: 'submit', value: 'Post' })
	    );
	  }
	});

/***/ },
/* 7 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ }
/******/ ]);