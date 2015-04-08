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
				<div className="nowInfo">
					Now there are {this.props.now} in surgery
				</div>
                <div className="theText needle_wrapper"
					data-center-top="transform:translate(0px, 0vh);"
					data-top-bottom="transform:translate(0px, 25vh);"
				>
				<div className="negative-margin">
                    There were {this.props.selected} person in surgery
                </div>
                    <img src="../../img/needle-blue.svg" className="needle needle_overlay"
	                	data-top="clip: rect(0px, 30px, 110px, 0px);"
						data-top-bottom="clip: rect(110px, 30px, 110px, 0px);"></img>
					<img className="needle" src="../../img/needle.svg"></img>
                </div>

				<img className="stretcher" src="../../img/stretcher.svg"
				data-bottom-top="transform: translateX(0vw);" data-center-top="transform: translateX(-30vw);"></img>
			</div>
		);
	}
});

export default surgery;

