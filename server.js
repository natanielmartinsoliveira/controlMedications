var express = require('express');
var bodyParser = require('body-parser');
var morgan  = require("morgan");
var app = express();

app.use(bodyParser.json());

var units = [
	{ id: 1, name: "grams", symbol: "g" },
	{ id: 2, name: "liters", symbol: "l" },
	{ id: 3, name: "miligrams", symbol: "mg" },
	{ id: 4, name: "kilograms", symbol: "kg" },
	{ id: 5, name: "mililiters", symbol: "ml" }
];

var medication = [
  {id: 1, name: "Aspirine",  orientation: 'cool place', units: units[1]},
  {id: 2, name: "AAS",  orientation: 'cool place', units: units[3] },
  {id: 3, name: "Quetiapine",  orientation: 'cool place', units: units[3]}
  {id: 3, name: "Insulin",  orientation: 'low temperature', units: units[5]}
];

app.use(morgan("dev"));
app.use(express.static("./"));

app.get("/", function(req, res) {
    res.sendFile("./index.html"); //index.html file of your angularjs application
});

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/list', function(req, res) {
  res.json(medication);
});

app.get('/list/:id', function(req, res) {
  medication.forEach(function (item) {
  	if (medication.id == req.params.id) {
  		res.json(item);
  		return;
  	}
  });
  res.status(404).end();
});

app.delete('/list/:id', function(req, res) {
  var todoListRemoved = medication.filter(function(item) {
    return item.id != req.params.id;
  });
  res.json(todoListRemoved);
  return;
});

app.put('/list/:id', function(req, res) {
  for (var item in medication) {
     if (medication[item].id == req.params.id) {
        console.log(req.body.id);
        medication[item].status = status[status.findIndex( x => x.id == req.body.id )];
        break; //Stop this loop, we found it!
     }
   }
  res.json(medication);
  return;
});

app.post('/list', function(req, res) {
  req.body.status = status[status.findIndex( x => x.id == req.body.status )];
  medication.push(req.body);
  res.json(true);
});

app.get('/status', function(req, res) {
  res.json(status);
});

app.listen(4000);