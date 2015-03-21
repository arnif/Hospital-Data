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
				<img className="stretcher" src="../../img/stretcher.svg"
				data-_surgeriepatientstart="transform: translateX(0px);" data-_surgeriepatientend="transform: translateX(-700px);"></img>
			</div>
		);
	}
});

export default surgery;

