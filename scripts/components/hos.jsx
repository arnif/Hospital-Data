'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./hos.scss');
let Hos = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
				There are {this.props.number.icu} at ICU, {this.props.number.er} at the ER, {this.props.number.child} at child something,
				{this.props.number.walk} at göngudeild and {this.props.number.hotel} at the hotel
				<img className="icu" src="../../img/hurt.svg"></img>
				<img className="er" src="../../img/hurt.svg"></img>
				<img className="child" src="../../img/hurt.svg"></img>
				<img className="hotel" src="../../img/hurt.svg"></img>
			</div>
		);
	}
});

export default Hos;

