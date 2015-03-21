'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./atWork.scss');
require(['skrollr'], function(skrollr){
	var s = skrollr.init({
		constants: {
			five00 : 800,
			zero: 500
		}
	});
});
let AtWork = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (

			<div className={this.props.className}>
				There were {this.props.number} at work
				<img className="nurse male" data-_zero="transform: translateX(-180%);" data-_five00="transform: translateX(200%);" src="../../img/doctor.svg"></img>
				<img className="nurse female" data-_zero="transform: translateX(60%);" data-_five00="transform: translateX(-300%	);" src="../../img/nurse.svg"></img>
			</div>
		);
	}
});

export default AtWork;

