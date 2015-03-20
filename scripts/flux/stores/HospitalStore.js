import {Store} from 'flummox';

class HospitalStore extends Store {
  constructor(flux) {
    super();

    let scheduleActionIds = flux.getActionIds('HospitalActions');
    this.register(scheduleActionIds.newData, this.getData);
    
    this.state = {
    	data: {}
    }
  }
  setData(hospital) {
  	this.setState({ data: hospital});
  }
  getData(results) {
  	this.setData(results.data);
  }
}

export default HospitalStore;
