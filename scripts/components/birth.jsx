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
				There are {this.props.number} at born
				<img className="preggo" src="../../img/preggo.svg"></img>
				<img className="fetus" src="../../img/fetus.svg"></img>
			</div>
		);
	}
});

export default Birth;

