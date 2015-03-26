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
				<div className="text-bellow">
					{this.props.selected} were born but NOW there are {this.props.now}
				</div>
				<img className="preggo"  src="../../img/preggo.svg"></img>
				<img className="fetus" data-bottom="top: 58%; opacity: 1; left: 50%;" data-top="top: 88%; left: 60%; opacity: 0;" src="../../img/fetus.svg"></img>
				<img className="newborn" data-center-top="top: 80%; opacity: 0; left: 61%; -webkit-transform: rotate(35deg);" data-top="top: 88%; left: 61%; opacity: 1; -webkit-transform: rotate(0deg);" src="../../img/baby.svg"></img>
			</div>
		);
	}
});

export default Birth;

