'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./hos.scss');
let Hos = React.createClass({
	getInitialState() {
		return null
	},
	getPercent(selected) {
		return selected.icu + selected.er + selected.child + selected.hotel + selected.walk;
	},
	render() {
		var selected = this.props.selected;
		var now = this.props.now;
		var icu =  parseInt(selected.icu) / parseInt(this.getPercent(selected)) * 1000 + 'px';
		var er =  parseInt(selected.er) / parseInt(this.getPercent(selected)) * 1000 + 'px';
		var child =  parseInt(selected.child) / parseInt(this.getPercent(selected)) * 1000 + 'px';
		var hotel =  parseInt(selected.hotel) / parseInt(this.getPercent(selected)) * 1000 + 'px';
		var walk =  parseInt(selected.walk) / parseInt(this.getPercent(selected)) * 1000 + 'px';
		return (
			<div className={this.props.className}>
				<div className="nowInfo" data-_sixfifty="opacity:0; right:-300px;" data-_sevenfifty="right:0; opacity: 1;" data-_eighthundered="opacity:0;">
					Today there are {now.icu} in the ICU
				</div>
				<div className="headInfo">There were</div>
				<img className="icu sick" src="../../img/hurt.svg" style={{height: icu}}></img>					
				<img className="er sick" src="../../img/hurt.svg" style={{height: er}}></img>
				<img className="child sick" src="../../img/hurt.svg" style={{height: child}}></img>
				<img className="hotel sick" src="../../img/hurt.svg" style={{height: hotel}}></img>
				<img className="walk sick" src="../../img/hurt.svg" style={{height: walk}}></img>
				<div className="infoText">
					<p>{selected.icu} at the ICU</p>
					<p>{selected.er} at the ER</p>
					<p>{selected.child} at the child faculty</p>
					<p>{selected.hotel} at the hospital hotel</p>
					<p>{selected.walk} at the outpatient</p>
				</div>
			</div>
		);
	}
});

export default Hos;

