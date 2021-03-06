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
				<div className="nowInfo" data-_twofifty="opacity:0; right:-300px;" data-_threehundred="right:0; opacity: 1;" data-_threefifty="opacity:0;">
					Today {this.props.now} have given blood
				</div>
				<div className="blood_wrapper">
					<img src="../../img/blod_red.svg" className="blood_mynd blood_overlay"
					data-bottom="clip: rect(390px, 558px, 482px, 0px); " data-top="clip: rect(3px, 558px, 482px, 0px);"></img>
					<img src="../../img/blod.svg" className="blood_mynd"></img>
				</div>
          <div className="text-bellow">
              There were {this.props.selected} blood donors
          </div>
			</div>
		);
	}
});

export default Blood;

