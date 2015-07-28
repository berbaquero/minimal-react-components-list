import React from 'react';

const Head = React.createClass({

	getDefaultProps() {
		return {
			title: '',
			description: '',
			styles: [],
			webappCapable: false,
			webappCapableApple: false,
			faviconURL: '',
			webappIconURL: ''
		}
	},

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
				<title>{this.props.title + (this.props.description ? ' - ' + this.props.description : '')}</title>
				<meta charSet='UTF-8'/>
				<meta name='viewport' content='width=device-width, initial-scale=1.0'/>
				<meta name='description' content={this.props.description}/>
				{this.props.webappCapable ? <meta name="mobile-web-app-capable" content="yes"/> : ''}
				{this.props.webappCapableApple ? <meta name="apple-mobile-web-app-capable" content="yes"/> : ''}
				{this.props.faviconURL ? <link rel="icon" type="image/png" href={this.props.faviconURL}/> : ''}
				{this.props.webappIconURL ? <link rel="apple-touch-icon-precomposed" sizes="144x144" href={this.props.webappIconURL}/> : '' }
				{styles}
			</head>
		)
	}
});

export default Head;
