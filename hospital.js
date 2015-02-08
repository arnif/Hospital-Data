var request = require('request');
var mongoose = require('mongoose');

var Hospital = require('./hospital.model');

mongoose.connect('mongodb://localhost/hospital');

setInterval (function() {
    request('http://apis.is/hospital', function (error, response, body) {
      if (!error && response.statusCode == 200) {
     var hos = new Hospital();
        hos.hospitalData = JSON.parse(body);
        hos.save(function(err) {
            if (err) {
                console.log(err);
                //process.exit(1);
            }
            //process.exit(0);
        });
      }
    });
}, 3600000);
