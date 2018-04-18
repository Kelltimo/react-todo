var React = require('react');

var TimerButton = React.createClass({
  onSubmit: function(e) {
    e.preventDefault();
    var strSeconds = this.refs.seconds.value;
    this.refs.seconds.value = '';
    this.props.onStartTimer(parseInt(strSeconds, 10));
  },

  render: function() {
    return (<div>
      <form ref="form" onSubmit={this.onSubmit} className="timer-form">
        <button className="button expanded">Start</button>
      </form>
    </div>)
  }
});

module.exports = TimerButton;
