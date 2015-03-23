import {Actions} from 'flummox';
import request from 'superagent';
import constants from '../../config/constants';

class HospitalActions extends Actions {
	
	newData(data) {
		return { data }
	}

	async getData(from, to) {
		console.log('getData', from, to);
	    request.get(`${constants.api}/${from}/${to}`)
	      .end(res => {
	      	console.log('API CALL from', from);
	      	console.log('API CALL to', to);
	      	console.log('API CALL results', res.body);
	        this.newData(res.body);
	      });
  }
}

export default HospitalActions;
