import React from 'react';

const Head = React.createClass({

	render() {
		const styles = this.props.styles.map((url) =>
				<link rel="stylesheet"
					  href={url}/>
		);

		return (
			<head>
				<title>{this.props.title}</title>
				{styles}
			</head>
		)
	}
});

export default Head;
