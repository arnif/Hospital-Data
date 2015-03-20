'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from './config/constants';

require('./app.scss');

let Props = React.PropTypes;
let CSSTransitionGroup = React.addons.CSSTransitionGroup;


let App = React.createClass({

  componentDidMount() {
    
  },
  getHospital() {
  	//TODO
  	console.log('getHospital in appJSX');
  	this.props.flux.getActions('HospitalActions').getData('2015-02-09T19:55:00.269Z', '2015-02-11T21:55:00.933Z')

  },
  render() {
    return (
      <div>
        <h1>Cool</h1>
        <button onClick={this.getHospital}>TAKKI</button>        
      </div>
    );
  }
});

export default App;
