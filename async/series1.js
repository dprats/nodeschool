//1.write a program that will receive 2 URLs as
//	first and second p.a.
//2.Using http.get create GET request to these URLs
//	and pass the response body to the callback
//3.pass in an object of task functions using the property
//	'requestOne' and 'requestTwo' as async series
//4. console.log results in the callback

var http = require('http');
var async = require('async');

var url1 = process.argv[2];
var url2 = process.argv[3];

async.series({

	//hit URL1 pass the response to callback
	requestOne: function(cb){

		var body1 ='';
		//get from url1
		http.get(url1, function(res){

			res.on('data', function(chunk){
				body1 += chunk.toString();
			});

			res.on('end', function(chunk){
				cb(null,body1);
			});

		}).on('error', function(e){
			cb(e);
		});

	},
	//hit URL2 pass the response to callback
	requestTwo: function(done){
			var body2 ='';
		//get from url1
		http.get(url2, function(res){
			res.on('data', function(chunk){
				body2 += chunk.toString();
			});
			res.on('end', function(chunk){
				done(null,body2);
			});

		}).on('error', function(e){
			done(e);
		});
	}
}, 
function(err, results){
	if (err) return console.error(err);
	//console log the results
	console.log(results);
});