import {Flux} from 'flummox';
import HospitalActions from './actions/HospitalActions.js';
import HospitalStore from './stores/HospitalStore.js';

class AppFlux extends Flux {
  constructor() {
    super();

    this.createActions('HospitalActions', HospitalActions);
    this.createStore('HospitalStore', HospitalStore, this);
  }
}

export default AppFlux;
