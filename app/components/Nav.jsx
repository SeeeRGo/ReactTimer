var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
	render: function(){
		return(
			<div className="top-bar">
				<div className="top-bar-left">
					<ul className="menu">
						<li className="menu-text">My Timer App</li>
						<li>
							<IndexLink to="/timer" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>				
						</li>
						<li>
							<Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
						</li>
					</ul>
				</div>				
			</div>
			);
	}
});

module.exports = Nav;