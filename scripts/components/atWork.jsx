'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./atWork.scss');
require(['skrollr'], function(skrollr){
	var s = skrollr.init({
		constants: {
			zero: 500,
			five00 : 800,
			donorsstart: 1500,
			donorsend: 1800
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
				<img className="nurse male" data-_zero="transform: translateX(-180%);" data-_five00="transform: translateX(200%);" src="../../img/doctor.svg"></img>
				<img className="nurse female" data-_zero="transform: translateX(60%);" data-_five00="transform: translateX(-300%	);" src="../../img/nurse.svg"></img>
                <div className="text-bellow">
                    There were {this.props.number} at work
                </div>
			</div>
		);
	}
});

export default AtWork;

