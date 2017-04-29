var React = require('react');
var Clock = require('Clock');
var Controls = require('Controls');

var Timer = React.createClass({
	getInitialState: function() {
		return {
					count: 0,
					countdownStatus: 'paused'
					};
	},
	handleStatusChange: function(newStatus){
		this.setState({
			countdownStatus: newStatus
		});
	},
	componentDidUpdate: function(prevProps, prevState) {
		if (this.state.countdownStatus !== prevState.countdownStatus){
			switch(this.state.countdownStatus){
				case 'started':
					this.startTimer();
					break;
				case 'stopped':
					this.setState({
						count:0,
						countdownStatus: 'paused'
					});
					this.pauseTimer();
					break;					
				case 'paused':
					this.pauseTimer();					
					break;
			}
		}
	},	
	componentWillUnmount: function() {
		clearInterval(this.timer);
		this.timer = undefined;		
	},
	startTimer: function(){
		this.timer = setInterval(() =>{
			var newCount = this.state.count;
			newCount++;
			this.setState({
				count: newCount
			});
		}, 1000);
	},
	pauseTimer: function(){
		clearInterval(this.timer);
		this.timer = undefined;
	},
	render: function() {
		var {count, countdownStatus} = this.state;		
		return(
			<div>
				<h1 className="page-title">Timer App</h1>
				<Clock totalSeconds={count}/>
				<Controls countdownStatus={countdownStatus} onStatusChange={this.handleStatusChange}/>				
			</div>
			);
	}
});

module.exports = Timer;