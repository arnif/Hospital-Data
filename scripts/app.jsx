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

  render() {
    return (
      <div>
        <h1>Cool</h1>        
      </div>
    );
  }
});

export default App;
