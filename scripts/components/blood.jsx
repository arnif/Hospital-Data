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
				There are {this.props.number} blood donors
				<img src="../../img/blod.svg"></img>
			</div>
		);
	}
});

export default Blood;

