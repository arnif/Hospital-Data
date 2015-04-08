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
    var date = new Date(moment().set('minutes', 0).format());
    return { date: date};
  },
  componentDidMount() {
    this.changeDate(new Date(moment().set('minutes', 0).format()));
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
    er: this.props.selected.patientsEr,
    child: this.props.selected.patientsChild,
    heart: this.props.selected.patientsHeart2,
    icu: this.props.selected.patientsIcu,
    hotel: this.props.selected.patientsHotel,
    walk: this.props.selected.patientsWalk

  };
   var nowHospitalizedNumbers = {
     er: this.props.now.patientsEr,
     child: this.props.now.patientsChild,
     heart: this.props.now.patientsHeart2,
     icu: this.props.now.patientsIcu,
     hotel: this.props.now.patientsHotel,
     walk: this.props.now.patientsWalk
   };
   var date = moment(this.state.date).format("dddd, MMMM DD YYYY [at] HH:mm");

    return (
      <div>
        <div className="hospital-header"> 
          <div className="title-text">We Dare To Care</div>
          <div className="pick-text">Pick a date and time</div>
          <div className="hospital-picker-wrapper">
            <DateTimePicker
                className="hospital-picker-picker"
                format={"dddd, MMMM dd, yyyy HH:mm"}
                step={60}
                max={new Date()}
                value={this.state.date}
                onChange={this.changeDate.bind()}

            />
          </div>
        </div>
        <div className="introText" id="hospital-state">
          On {date} this was the state of the hospital
        </div>

        <AtWork className="height atWork" selected={this.props.selected.atWork} now={this.props.now.atWork}/>
        <Blood className="height blood" selected={this.props.selected.donors} now={this.props.now.donors}/>
        <Surgery className="height extraHigh surgery" selected={this.props.selected.surgeries} now={this.props.now.surgeries}/>
        <Birth className="height birth" selected={this.props.selected.birthNumbers} now={this.props.now.birthNumbers}/>
        <Hos className="height hos" selected={hospitalizedNumbers} now={nowHospitalizedNumbers}/>

      </div>
    );
  }
});

export default App;
