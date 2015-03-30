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
                <div className="theText"
					data-center-top="transform:translate(0px, 0px);"
					data-top-bottom="transform:translate(0px, 290px);"
				>
                    There were {this.props.selected} person in surgery NOW there are {this.props.now}
					<img className="needle" src="../../img/needle.svg"></img>
                </div>

				<img className="stretcher" src="../../img/stretcher.svg"
				data-bottom-top="transform: translateX(0vw);" data-center-top="transform: translateX(-30vw);"></img>
			</div>
		);
	}
});

export default surgery;

