var React = require('react');
var ReactDOM = require('react-dom');
var {
  Route,
  Router,
  IndexRoute,
  hashHistory
} = require('react-router');
var Main = require('Main');
var Nav = require('Nav');
var Timer = require('Timer');
var Countdown = require('Countdown');

// Load foundations
require('style!css!foundation-sites/dist/css/foundation.min.css');
$(document).foundation();

// Load CSS
require('style!css!sass!applicationStyles');

//Define proper routes

ReactDOM.render(<Router history={hashHistory}>
  <Route path="/" component={Main}>
    <Route path="countdown" component={Countdown}/>
    <IndexRoute component={Timer}/>
  </Route>

</Router>, document.getElementById('app'));
