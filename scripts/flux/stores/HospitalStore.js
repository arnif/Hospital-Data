import {Store} from 'flummox';

class HospitalStore extends Store {
  constructor(flux) {
    super();

    let scheduleActionIds = flux.getActionIds('HospitalActions');
    this.register(scheduleActionIds.newData, this.getData);
    
    this.state = {
      now: {
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
      },
      selected: {
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
  }
  setData(hospital) {
    let now = hospital.currentData.results[0];
    let selected = hospital.selectedData[0].hospitalData.results[0];

  	this.setState({
      now: {
        atWork: now.atwork,
        birthNumbers: now.birthNumbers,
        dischargedNumbers: now.dischargedNumbers,
        donors: now.donors,
        hospitalizedNumbers: now.hospitalizedNumbers,
        patientsChild: now['patients-child'],
        patientsEr: now['patients-er'],
        patientsHeart2: now['patients-heart2'],
        patientsHotel: now['patients-hotel'],
        patientsIcu: now['patients-icu'],
        patientsSkilun: now['patients-skilun'],
        patientsWalk: now['patients-walk'],
        surgeries: now.surgeries
      },
      selected: {
        atWork: selected.atwork,
        birthNumbers: selected.birthNumbers,
        dischargedNumbers: selected.dischargedNumbers,
        donors: selected.donors,
        hospitalizedNumbers: selected.hospitalizedNumbers,
        patientsChild: selected['patients-child'],
        patientsEr: selected['patients-er'],
        patientsHeart2: selected['patients-heart2'],
        patientsHotel: selected['patients-hotel'],
        patientsIcu: selected['patients-icu'],
        patientsSkilun: selected['patients-skilun'],
        patientsWalk: selected['patients-walk'],
        surgeries: selected.surgeries
      }

    });
  }

  getData(results) {
  	this.setData(results.data);
  }
}

export default HospitalStore;
