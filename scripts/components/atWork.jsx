'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./atWork.scss');
let AtWork = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
				There are {this.props.number} at work
				<img className="nurse" src="../../img/doctor.svg"></img>
				<img className="nurse" src="../../img/nurse.svg"></img>
			</div>
		);
	}
});

export default AtWork;

