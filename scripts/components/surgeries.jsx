'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./surgeries.scss');
let surgery = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
				There were {this.props.number} at surgery
				<img className="needle" src="../../img/needle.svg"></img>
				<img className="stretcher" src="../../img/stretcher.svg"></img>
			</div>
		);
	}
});

export default surgery;

