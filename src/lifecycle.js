var React = require('react');
var ReactDOM = require('react-dom');



var Timer = React.createClass({
	getInitialState: function() {
	    //alert('getInitialState!');
	    return { time: 0 };	
	},
	componentWillMount: function() {
		//alert('componentWillMount!');
		setInterval(function() {
			this.setState({ time: this.state.time + 1 });
		}.bind(this), 1000);
	},
	render: function() {
		//alert('render!');
		return (
			<div>
				{ this.state.time }
			</div>
			);
	}
	// componentDidMount: function() {
	// 	//alert('componentDidMount!');
	// 	return {};
	// }
});

ReactDOM.render(
	<Timer />,
	document.getElementById('lifecycle')
	)