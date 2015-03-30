'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
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
	render() {
		return (

			<div className={this.props.className}>
				<img className="nurse male" data-bottom-top="transform: translateX(-60%);" data-center="transform: translateX(200%);" src="../../img/doctor.svg"></img>
				<img className="nurse female" data-bottom-top="transform: translateX(60%);" data-center="transform: translateX(-200%	);" src="../../img/nurse2.svg"></img>
                <div className="text-bellow">
                    There were {this.props.selected} working compared to {this.props.now} now
                </div>
			</div>
		);
	}
});

export default AtWork;

