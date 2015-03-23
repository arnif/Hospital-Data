'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./birth.scss');
let Birth = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
				There are {this.props.number} at born
				<img className="preggo"  src="../../img/preggo.svg"></img>
				<img className="fetus" data-bottom="top: 58%; display: block; left: 50%;" data-top="top: 88%; left: 60%; display: none;" src="../../img/fetus.svg"></img>
				<img className="newborn" data-bottom="opacity: 0;" data-top="opacity: 1;" src="../../img/baby.svg"></img>
			</div>
		);
	}
});

export default Birth;

