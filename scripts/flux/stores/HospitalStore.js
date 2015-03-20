import {Store} from 'flummox';

class HospitalStore extends Store {
  constructor(flux) {
    super();

    let scheduleActionIds = flux.getActionIds('HospitalActions');
    
    this.state = {
      schedule: [],
    };
  }
}

export default HospitalStore;
