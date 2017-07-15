var React = require('react');
var ReactDOM = require('react-dom');
require('jquery');

import './styles/app.scss';

// Load foundation
$(document).foundation();

ReactDOM.render(<p>React boilerplate</p>, document.getElementById('app'));
