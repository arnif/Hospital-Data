'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from './config/constants';
var ReactWidgets = require('react-widgets');
var DateTimePicker = ReactWidgets.DateTimePicker;

require('./app.scss');

let Props = React.PropTypes;
let CSSTransitionGroup = React.addons.CSSTransitionGroup;


let App = React.createClass({

  componentDidMount() {
    
  },
  getHospital() {
  	//TODO
  	console.log('getHospital in appJSX');
  	this.props.flux.getActions('HospitalActions').getData('2015-02-09T19:55:00.269Z', '2015-02-11T21:55:00.933Z');

  },

  render() {
    return (
      <div>
        <div className="hospital-header"> 
          <h1>Hospital Data</h1>
        </div>

        <div className="hospital-picker-wrapper">
          <h2>Pick a date</h2>
          <DateTimePicker className="hospital-picker-picker" defaultValue={null} />
          <button onClick={this.getHospital}>TAKKI</button>
        </div>

        <div> {this.props.atWork} At work</div>
        <div> {this.props.birthNumbers} birthNumbers </div>
        <div> {this.props.dischargedNumbers} dischargedNumbers </div>
        <div> {this.props.donors} Blood donors </div>
        <div> {this.props.hospitalizedNumbers} hospitalizedNumbers </div>
        <div> {this.props.patientsChild} at child thing </div>
        <div> {this.props.patientsEr} at ER </div>
        <div> {this.props.patientsHeart2} patientsHeart2 </div>
        <div> {this.props.patientsHotel} patientsHotel </div>
        <div> {this.props.patientsIcu} ICU </div>
        <div> {this.props.patientsSkilun} patientsSkilun </div>
        <div> {this.props.patientsWalk} patientsWalk </div>
        <div> {this.props.surgeries} surgeries </div>
      </div>
    );
  }
});

export default App;
