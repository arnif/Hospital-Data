import {Store} from 'flummox';

class HospitalStore extends Store {
  constructor(flux) {
    super();

    let scheduleActionIds = flux.getActionIds('HospitalActions');
    this.register(scheduleActionIds.newData, this.getData);
    
    this.state = {
    	data = {}
    };
  }

  getData(results) {
  	console.log('results', results);
  }
}

export default HospitalStore;
