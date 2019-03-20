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
  {id: 1, name: "Aspirine",  orientation: 'cool place', quantity: 5, units: units[1]},
  {id: 2, name: "AAS",  orientation: 'cool place', quantity: 6, units: units[3] },
  {id: 3, name: "Quetiapine",  orientation: 'cool place', quantity: 1,  units: units[3]},
  {id: 4, name: "Insulin",  orientation: 'low temperature', quantity: 5, units: units[3]}
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

app.get('/edit/:id', function(req, res) {

  medication.forEach(function (item) {
  	if (item.id == req.params.id) {
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
  medication = todoListRemoved;
  res.json(todoListRemoved);
  return;
});

app.put('/stock/:id', function(req, res) {
  for (var item in medication) {
     if (medication[item].id == req.params.id) {
        console.log(req.body.id);
        medication[item].units = units[units.findIndex( x => x.id == req.body.id )];
        break; //Stop this loop, we found it!
     }
   }
  res.json(medication);
  return;
});

app.put('/list/:id', function(req, res) {
  for (var item in medication) {
     if (medication[item].id == req.params.id) {
        medication[item] = req.body;
        break; 
     }
   }
  res.json(medication);
  return;
});

app.post('/list', function(req, res) {
  console.log(req.body);
  req.body.units = units[units.findIndex( x => x.id == req.body.units )];
  medication.push(req.body);
  res.json(true);
});

app.get('/units', function(req, res) {
  res.json(units);
});

app.listen(4000);