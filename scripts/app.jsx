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
        <h2>Datepicker comes here</h2>
        <button onClick={this.getHospital}>TAKKI</button>        
        <div> Div 1 </div>
        <div> Div 2 </div>
        <div> Div 3 </div>
        <div> Div 4 </div>
        <div> Div 5 </div>
      </div>
    );
  }
});

export default App;
