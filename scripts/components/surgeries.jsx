'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from '../config/constants';
require('./surgeries.scss');
let surgery = React.createClass({
	getInitialState() {
		return null
	},
	render() {
		return (
			<div className={this.props.className}>
                <div className="theText">
                    There were {this.props.number} at surgery
                </div>
				<img className="needle" src="../../img/needle.svg"
				data-_kniferotatestart="transform:rotate(0deg) translate(0px, 0px);"
				data-_kniferotateend="transform:rotate(45deg) translate(150px,90px);"
				data-_knifecutstart="left:400px;"
				data-_knifecutend="left:20px;"
				data-_makethecutstart="left:400px; top:0px;"
				data-_makethecutend="left:700px; top:50px;"></img>
				<img className="stretcher" src="../../img/stretcher.svg"
				data-_surgeriepatientstart="transform: translateX(0px);" data-_surgeriepatientend="transform: translateX(-700px);"></img>
			</div>
		);
	}
});

export default surgery;

