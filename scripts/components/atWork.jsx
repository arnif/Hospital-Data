'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
var Waypoint = require('react-waypoint');
require('./atWork.scss');
require(['skrollr'], function(skrollr){
	var s = skrollr.init({
		constants: {
			onehundred: 100,
			zero: '50p',
			five00 : '80p',
			donorsstart: '150p',
			donorsend: '180p',
			surgeriepatientstart: '250p',
			surgeriepatientend: '280p',
			kniferotatestart: '240p',
			kniferotateend: '253p',
			knifecutstart: '275p',
			knifecutend: '30p',
			makethecutstart: '274p',
			makethecutend: '280p',
			birthstart: '260p',
			birthend: '280p',
			retbirth: '285p'
		}
	});
});
let AtWork = React.createClass({
	getInitialState() {
		return null
	},
	_testEnter() {
		console.log('ENTER');
	},
	_testLeve() {
		console.log('LEFT');
	},
	render() {
		return (

			<div className={this.props.className}>
				<Waypoint
					onEnter={this._testEnter.bind(this, 'Waypoint entered')}
					onLeave={this._testLeve.bind(this, 'Waypoint left')}
					threshold={0.2}
				/>
				<img className="nurse male" data-bottom-top="transform: translateX(-60%);" data-center="transform: translateX(200%);" src="../../img/doctor.svg"></img>
				<img className="nurse female" data-bottom-top="transform: translateX(60%);" data-center="transform: translateX(-200%	);" src="../../img/nurse2.svg"></img>
                <div className="text-bellow">
                    There were {this.props.selected} working
                </div>
			</div>
		);
	}
});

export default AtWork;

