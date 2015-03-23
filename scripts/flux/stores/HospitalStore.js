import {Store} from 'flummox';

class HospitalStore extends Store {
  constructor(flux) {
    super();

    let scheduleActionIds = flux.getActionIds('HospitalActions');
    this.register(scheduleActionIds.newData, this.getData);
    
    this.state = {
      atWork: 0,
      birthNumbers: 0,
      dischargedNumbers: 0,
      donors: 0,
      hospitalizedNumbers: 0,
      patientsChild: 0,
      patientsEr: 0,
      patientsHeart2: 0,
      patientsHotel: 0,
      patientsIcu: 0,
      patientsSkilun: 0,
      patientsWalk: 0,
      surgeries: 0
    }
  }
  setData(hospital) {
    let hospitalData = hospital[0].hospitalData.results[0];
    console.log('this is the new data!!!', hospitalData);
  	this.setState({ 
      atWork: hospitalData.atwork,
      birthNumbers: hospitalData.birthNumbers,
      dischargedNumbers: hospitalData.dischargedNumbers,
      donors: hospitalData.donors,
      hospitalizedNumbers: hospitalData.hospitalizedNumbers,
      patientsChild: hospitalData['patients-child'],
      patientsEr: hospitalData['patients-er'],
      patientsHeart2: hospitalData['patients-heart2'],
      patientsHotel: hospitalData['patients-hotel'],
      patientsIcu: hospitalData['patients-icu'],
      patientsSkilun: hospitalData['patients-skilun'],
      patientsWalk: hospitalData['patients-walk'],
      surgeries: hospitalData.surgeries
    });
  }

  getData(results) {
  	this.setData(results.data);
  }
}

export default HospitalStore;
