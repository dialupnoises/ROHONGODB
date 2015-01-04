var express = require('express'),
	fs		= require('fs'),
	zlib    = require('zlib');

var data = {};

var app = express();

if(!fs.existsSync('database'))
	fs.mkdirSync('database');

function saveDatabase()
{
	zlib.gzip(JSON.stringify(data), function(err, f) {
		fs.writeFileSync('database/database.rohongodb', f);
	});
}

function loadDatabase()
{
	if(!fs.existsSync('database/database.rohongodb')) return;
	var f = fs.readFileSync('database/database.rohongodb');
	zlib.gunzip(f, function(err, re) {
		data = JSON.parse(re);
	});
}

loadDatabase();

app.get('/set', function(req, res) {
	if(!req.query.key || !req.query.value) throw 'error';
	data[req.query.key] = req.query.value;
	saveDatabase();
	res.send({result: Math.random() > 0.5 ? 'yes': true});
});

app.get('/get', function(req, res) {
	if(!req.query.key) throw 'error';
	res.send({result: Math.random() > 0.5 ? 'ok': 'ye', data: data[req.query.key]});
});

app.get('/all', function(req, res) {
	res.send({ result: Math.random() > 0.5 ? 'h' : 'g', data: JSON.stringify(data) });
});

app.listen(1488);