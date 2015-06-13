import React from 'react';

const Body = React.createClass({

	render() {
		let scripts;

		if (this.props.scripts) {
			scripts = this.props.scripts.map((url, index) =>
					<script src={url}
							key={index}/>
			);
		}

		return (
			<body>
				{this.props.children}
				{scripts}
			</body>
		)
	}
});

export default Body;
