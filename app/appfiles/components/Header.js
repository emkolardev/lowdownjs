import React from 'react';

var Header = React.createClass({
	render: function() {
		return (
			<div className="header">
				<div className="headerText">
					<h1 className="h1">lowdownjs</h1>
					<h2 className="h2">javascript: oversimplified, with occasional illustrations</h2>
				</div>
				<div className="menuIcon">
					<div className="icon menu" id="menu-btn" data-target="menu" data-class="show">
					</div>
				</div>
			</div>
		)
	}
});

export default Header;