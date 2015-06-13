import React from 'react';

const Body = React.createClass({

	render() {
		const scripts = this.props.scripts.map((url) =>
				<script src={url}/>
		);

		return (
			<body>
				{this.props.children}
				{scripts}
			</body>
		)
	}
});

export default Body;
