
//Let's refactor this function using the 
//popular "lodash" library.

var HTTP = require('q-io/http');
var _ = require('lodash');

var url1 = 'http://localhost:7000/';
var url2 = 'http://localhost:7001/';

function buildPath(id){
	return url2 + id;
}

HTTP.read(url1)
.then(_.compose(HTTP.read, buildPath))
.then(JSON.parse)
.then(console.log)
.then(null, console.error)
.done();