import React from 'react';
import Header from './Header';
import Menu from './Menu';
import TabBar from './TabBar';
import TabPanel from './TabPanel';
import Post from './Post';

var App = React.createClass({
	render: function() {
		return (
			<div className="application">
				<Header />
				<Menu />
				<TabBar />
				<TabPanel />
				<Post />
			</div>
		)
	}
});

export default App;