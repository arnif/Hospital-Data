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
		var icu =  parseInt(selected.icu) / parseInt(this.getPercent(selected)) * 100 + '%';
		var er =  parseInt(selected.er) / parseInt(this.getPercent(selected)) * 100 + '%';
		var child =  parseInt(selected.child) / parseInt(this.getPercent(selected)) * 100 + '%';
		var hotel =  parseInt(selected.hotel) / parseInt(this.getPercent(selected)) * 100 + '%';
		var walk =  parseInt(selected.walk) / parseInt(this.getPercent(selected)) * 100 + '%';
		console.log('[render]a', icu);
		console.log('[render]icu', this.props.selected.icu);
		console.log('[render]getPercent', this.getPercent(this.props.selected));
		return (
			<div className={this.props.className}>
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

