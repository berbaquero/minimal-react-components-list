import React from 'react';

const Head = React.createClass({

	render() {
		let styles;

		if (this.props.styles) {
			styles = this.props.styles.map((url, index) =>
					<link rel="stylesheet"
						  href={url}
						  key={index}/>
			);
		}

		return (
			<head>
				<title>{this.props.title}</title>
				<meta name='viewport'
					  content='width=device-width, initial-scale=1.0'/>
				{styles}
			</head>
		)
	}
});

export default Head;
