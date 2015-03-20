'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from './config/constants';
var ReactWidgets = require('react-widgets');
var DateTimePicker = ReactWidgets.DateTimePicker;
var moment = require('moment');

require('./app.scss');

let Props = React.PropTypes;
let CSSTransitionGroup = React.addons.CSSTransitionGroup;


let App = React.createClass({
  getInitialState() {
    var date = new Date();
    date.setHours(date.getHours());
    date.setMinutes(0);
    return { date: date};
  },
  componentDidMount() {
    
  },
  changeDate(value) {
    //Sat Mar 07 2015 14:56:00 GMT+0000 (GMT)
    var state = {};
    state['date'] = value;
    this.setState(state);
    var date = moment(value).format();
    var dateFrom = moment(value).subtract(15, 'minutes').format();
    this.props.flux.getActions('HospitalActions').getData(dateFrom, date);
  },
  render() {    
    return (
      <div>
        <div className="hospital-header"> 
          <h1>Hospital Data</h1>
        </div>

        <div className="hospital-picker-wrapper">
        <h2>Pick a date</h2>
        <DateTimePicker 
            className="hospital-picker-picker" 
            value={this.state.date} 
            onChange={this.changeDate.bind()}/>  
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
