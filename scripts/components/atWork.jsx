'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
var Waypoint = require('react-waypoint');
require('./atWork.scss');
require(['skrollr'], function(skrollr){
	var s = skrollr.init({
		constants: {
			onehundred: '100p',
			fifty: '50p',
			eighty : '80p',
			onefifty: '150p',
			oneeighty: '180p',
			twohundered: '200p',
			twofifty: '250p',
			twoeighty: '280p',
			twofourty: '240p',
			twoseventyfive: '275p',
			thirty: '30p',
			twosixty: '260p',
			twoeightyfive: '285p',
			threehundred: '300p',
			threefifty: '350p',
			fourhundred: '400p',
			fourfifty: '450p',
			fivehundred: '500p',
			fivefifty: '550p',
			sixhundered: '600p',
			sixfifty: '650p',
			sevenhundered: '700p',
			sevenfifty: '750p',
			eighthundered: '800p'
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
				<div className="nowInfo" data-_fifty="opacity:0; right:-300px;" data-_onefifty="opacity: 1; right:0;" data-_twofifty="opacity:0;">
					Now there are {this.props.now} working
				</div>
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

