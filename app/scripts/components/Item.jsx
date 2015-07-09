import React from 'react';
import config from '../modules/config.js';

const Item = React.createClass({

	render() {

		let {description, files, html_url} = this.props.data;

		const fileList = Object.keys(files).map((file, index) => {
			const fileAsHash = file.toLowerCase().replace(/\./, '-');
			return (
				<pre key={index}>
					<a href={html_url + "#file-" + fileAsHash}
					   className='ui-link ui-blue'
					   target='_blank'>
						{file}
					</a>
				</pre>
			);
		});

		// Remove the Gist's original react label prefix
		description = description.replace(config.reactLabel, '');

		return (
			<li className='item'>
				<a href={html_url}
				   className='item-title ui-link ui-blue'
				   target='_blank'>{description}</a>

				<div>
					Files:&nbsp;

					{fileList}
				</div>
			</li>
		)
	}
});

export default Item;
