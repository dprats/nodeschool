//send an http POST request to LC:8000
//pipe process.stdin into it 

var http = require('http');
var request = require('request');

var post_request = request.post('http://localhost:8000');

process.stdin.pipe(post_request).pipe(process.stdout);

//official solution

// var request = require('request');
//     var r = request.post('http://localhost:8000');
//     process.stdin.pipe(r).pipe(process.stdout);