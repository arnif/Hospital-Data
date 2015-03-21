'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./blood.scss');
let Blood = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
				There were {this.props.number} blood donors
				<div className="blood_wrapper">
					<img src="../../img/blod_red.svg" className="blood_mynd blood_overlay"
					data-_donorsstart="clip: rect(390px, 558px, 482px, 0px); " data-_donorsend="clip: rect(3px, 558px, 482px, 0px);"></img>
					<img src="../../img/blod.svg" className="blood_mynd"></img>
				</div>
			</div>
		);
	}
});

export default Blood;

