//send http request to lc8000
//pipe from stdin to stdout
//use request module to send a request

//require request
var http = require('http');
var request = require('request');

//post request
// var post_request = request.post('http://localhost:8000');

//send http POST request to 8000
process.stdin.pipe(request.post('http://localhost:8000')).pipe(process.stdout);

//pipe from stdin to stdout