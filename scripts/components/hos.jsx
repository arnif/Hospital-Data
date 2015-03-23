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
				There are {this.props.selected.icu} at ICU, {this.props.selected.er} at the ER, {this.props.selected.child} at child something,
				{this.props.selected.walk} at göngudeild and {this.props.selected.hotel} at the hotel
				<img className="icu" src="../../img/hurt.svg"></img>
				<img className="er" src="../../img/hurt.svg"></img>
				<img className="child" src="../../img/hurt.svg"></img>
				<img className="hotel" src="../../img/hurt.svg"></img>
			</div>
		);
	}
});

export default Hos;

