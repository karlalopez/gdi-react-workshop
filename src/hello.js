var React = require('react');
var ReactDOM = require('react-dom');

var Hello = React.createClass({
	render: function() {
		return (
			<div>
				<h1>{this.props.course}</h1>
				<div>Hello React!</div>
			</div>
			
		);
	}
});

ReactDOM.render(
	<Hello course={"React.js Workshop"}/>,
	document.getElementById('hello')
	)



var Goodbye = React.createClass({
	render: function() {
		return (
			<div>Goodbye React!</div>
			
		);
	}
});

ReactDOM.render(
	<Goodbye />,
	document.getElementById('goodbye')
	)

var ClickCounter = React.createClass({
	getInitialState: function () {
	  return {clicks:0};
	},
	handleBtnClick: function () {
		this.setState({ 
		  clicks: this.state.clicks + 5
		});
	},
	render: function() {
		var isEven = this.state.clicks % 2 == 0;
		return (
			<div>
				<button className="btn btn-primary" onClick={ this.handleBtnClick
	}>
					<div>{this.props.text} &nbsp;
						<span className="badge">{this.state.clicks}</span>
					</div>
				</button>
				<div>{ isEven ? 'Even' : 'Odd'}</div>
				<ClickCounterCaption number = {this.state.clicks} />
			</div>
		);
	}
});

var ClickCounterCaption = React.createClass({
	render: function() {
		return (
			<div>
				Clicks: { this.props.number }
			</div>
		);
	}
});



ReactDOM.render(
	<ClickCounter text="Clicks"/>,
	document.getElementById('click-counter')
	)


