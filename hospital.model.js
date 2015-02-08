var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var HospitalSchema = new Schema({
  date: { type: Date, default: Date.now },
  hospitalData: {}
});

module.exports = mongoose.model('Hospital', HospitalSchema);