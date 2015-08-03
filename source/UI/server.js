'use strict';
var port = 49000;
var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path');
var fs = require('fs');
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

app.use('/', express.static(path.resolve(__dirname + '/public')));

app.get('/app/*', function(request, response) {
    response.sendFile(path.resolve(__dirname + '/public/index.html'));
});


function guid() {
  function s4() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  }
  return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
    s4() + '-' + s4() + s4() + s4();
}
// require('./createDummyData.js');

function getSpalten() {
    return JSON.parse(fs.readFileSync('spalten.json', 'utf8'));
}

function updateSpalten(spalten) {
    fs.writeFileSync('spalten.json', JSON.stringify(spalten));
}


function getKarten() {
    return JSON.parse(fs.readFileSync('karten.json', 'utf8'));
}

function updateKarten(karten) {
    fs.writeFileSync('karten.json', JSON.stringify(karten));
}


app.get("/board", function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");

	var spalten = getSpalten();
    var karten = getKarten();

    for (var s in spalten) {
        if (!spalten.hasOwnProperty(s))
            continue;

        spalten[s].karten = spalten[s].karten || [];

        for (var k in karten) {
            if (!karten.hasOwnProperty(k))
                continue;

            if (karten[k].spaltenId === spalten[s].id) {
                spalten[s].karten.push(karten[k]);
            }
        }
    }

    response.json(spalten);
});
app.get("/karte/:id", function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");


    response.json(getKarten()[request.params.id]);
});

app.get("/spalte/:id", function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");


    response.json(getSpalten()[request.params.id]);
});

app.post('/karte/:id?', function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");


    var id = request.params.id || guid();

    var karten = getKarten();

    karten[id] = karten[id] || {};
    karten[id].id = id;

    if (request.body.title)
        karten[id].title = request.body.title;
    if (request.body.text)
        karten[id].text = request.body.text;
    if (request.body.spaltenId)
        karten[id].spaltenId = request.body.spaltenId;

    updateKarten(karten);

    response.json(karten[id]);
});

app.post('/spalte/:id?', function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");


    var id = request.params.id || guid();

    var spalten = getSpalten();

    spalten[id] = spalten[id] || {};
    spalten[id].id = id;
    if (request.body.title)
        spalten[id].title = request.body.title;

    updateSpalten(spalten);

    response.json(spalten[id]);
});

app.delete('/karte/:id', function(request, response) {
	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");


    var karten = getKarten();
    delete karten[request.params.id];
    updateKarten(karten);

    response.json(true);
});

app.delete('/spalte/:id', function(request, response) {

	response.header("Access-Control-Allow-Origin", "*");
	response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response.header("Access-Control-Allow-Methods", "POST, GET, DELETE, OPTIONS");

    var spalten = getSpalten();
    delete spalten[request.params.id];
    updateSpalten(spalten);

    response.json(true);
});

http.listen(port, function() {
    console.log('listening on *:' + port);
});
