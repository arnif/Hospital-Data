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
				<div className="nowInfo" data-_fivehundred="opacity:0; right:-300px;" data-_fivefifty="right:0; opacity: 1;" data-_sixfifty="opacity:0;">
					Today there are {this.props.now} born
				</div>
				<div className="text-bellow" data-center-bottom="top: 0%;" data-top="top:15%;">
					{this.props.selected} were born
					<img className="preggo" src="../../img/preggo.svg"></img>
					<img className="fetus" data-bottom="top: 43vh; opacity: 1; left: 50%;" data-center-bottom="top: 44vh; left: 65%; opacity: 0;" src="../../img/fetus.svg"></img>
					<img className="newborn" data-center-top="top: 43vh; opacity: 0; left: 66%; -webkit-transform: rotate(35deg);" data-center-bottom="top: 47vh; left: 66%; opacity: 1; -webkit-transform: rotate(0deg);" src="../../img/baby.svg"></img>
				</div>
			</div>
		);
	}
});

export default Birth;

