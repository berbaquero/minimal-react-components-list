import React from 'react';
import Root from './root';

const Index = React.createClass({

	styles: ['/dist/main.css'],
	scripts: ['/dist/main.js'],

	render() {
		return (
			<Root title='Minimal React Components'
				  styles={this.styles}
				  scripts={this.scripts}>

				<header>
					<h1>React Components</h1>
				</header>

				<div id='app-container'></div>
			</Root>
		)
	}
});

export default Index;
