var request = require('request');
var mongoose = require('mongoose');
var express = require('express');
var app = express();
var Hospitals = require('./hospital.model');
var crontab = require('node-crontab');
var cors = require('cors');
app.use(cors());

mongoose.connect('mongodb://localhost/hospital');

var jobId = crontab.scheduleJob("55 * * * *", function(){
    addToDatabase();
});

function addToDatabase() {
    request('http://apis.is/hospital', function (error, response, body) {
      if (!error && response.statusCode == 200) {
     var hos = new Hospitals();
        hos.hospitalData = JSON.parse(body);
        hos.save(function(err) {
            if (err) {
                console.log(err);
            }
        });
      }
    });
}

app.get('/hospitals', function (req, res) {
  
  Hospitals.find({}, function(err, response) {
    if (err) {
        return res.send(err);
    }
    return res.json(response);
  })
});

app.get('/hospitals/:from/:to', function (req, res) {
  var from = req.params.from;
  var to = req.params.to;

  Hospitals.find({ 'date': {"$gte": new Date(req.params.from), "$lt": new Date(req.params.to)}}, function(err, response) {
        if (err) {
          return res.send(err);
        }
        return res.json(response);
      });


});

var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});