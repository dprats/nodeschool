//write program that will: 
//1. receive two CL URLs
//2. use http.get to create requests to these URLs
//3. console.log the array

var http = require('http');
var async = require('async');

async.map(process.argv.slice(2), 
	function(item, cb){

		var body ='';

		http.get(item, function(res){

			res.on('data', function(chunk){
				body += chunk.toString();
			});

			res.on('end', function(chunk){
				return cb(null, body);
			});


		}).on('error', function(err){
			cb(error);
		})
	}, 
	function(err, results){
		if (err) return console.error(err);
		console.log(results);
	});