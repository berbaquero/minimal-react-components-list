import React from 'react';
import Item from './components/Item.jsx';
import request from 'superagent';
import config from './modules/config.js';

const Main = React.createClass({

	getInitialState() {
		return {
			items: []
		}
	},

	componentDidMount() {
		const thisComponent = this;
		request
			.get(config.gistsURL)
			.end((err, res) => {
				thisComponent.setState({
					items: res.body
				})
			});
	},

	render() {
		let items;

		if (this.state.items) {
			items = this.state.items.map((item, index) => {
				// Only show the Gists that start with the React label
				if (item.description.indexOf(config.reactLabel) > -1) {
					return <Item data={item}
								 key={index}/>;
				}
			});
		}

		return (
			<div>
				<h2>List of Items</h2>
				<ul className='items-list'>
					{items}
				</ul>
			</div>
		)
	}
});

React.render(<Main/>, document.getElementById('app-container'));
