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
	        this.newData(res.body);
	      });
  }  
}

export default HospitalActions;
