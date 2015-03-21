'use strict';

import React from 'react/addons';
import FluxContainer from 'flummox';
import constants from './config/constants';
var ReactWidgets = require('react-widgets');
var DateTimePicker = ReactWidgets.DateTimePicker;
var moment = require('moment');
var AtWork = require('./components/atWork');
var Blood = require('./components/blood');
var Surgery = require('./components/surgeries');
var Birth = require('./components/birth');
var Hos = require('./components/hos');

require('./app.scss');
require('./divStyles.scss');

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
  var hospitalizedNumbers = {
    er: this.props.patientsEr,
    child: this.props.patientsChild,
    heart: this.props.patientsHeart2,
    icu: this.props.patientsIcu,
    hotel: this.props.patientsHotel,
    walk: this.props.patientsWalk

  }    
    return (
      <div>
        <div className="hospital-header"> 
          <div className="title-text">Hospital Data</div>
          <div className="pick-text">Pick a date</div>
          <div className="hospital-picker-wrapper">
            <DateTimePicker
                className="hospital-picker-picker"
                step={60}
                value={this.state.date}
                onChange={this.changeDate.bind()}

            />
          </div>
        </div>

        <AtWork className="height atWork" number={this.props.atWork} />
        <Blood className="height blood" number={this.props.donors} />
        <Surgery className="height surgery" number={this.props.surgeries} />
        <Birth className="height birth" number={this.props.birthNumbers} />
        <Hos className="height hos" number={hospitalizedNumbers} />
      </div>
    );
  }
});

export default App;
