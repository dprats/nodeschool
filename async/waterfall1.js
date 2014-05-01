var async = require('async');
var http = require('http');
var fs = require('fs');

// 1.write program that first reads contents of a file

// 2.path will be provided as first command-line argument

// 3.the file will contain single URL. Use http.get to create
// GET request to this URL and console.log response to body

async.waterfall([

	//function to read contents of a file.
	//pass URL to next F
	function(done){
		fs.readFile(process.argv[2], function(err, data){
			if (err) return done(err);
			done(null, data);
		});
	},

	// F to to body via get http request from URL
	// console.log body
	function(data, done){

		var body ='';

		//get request from the URL
		http.get(data.toString().trimRight(), function(res){

			//as we get data, add it to the body
			res.on('data', function(chunk){
				body +=chunk.toString();
			});

			//once all the data is passed
			res.on('end', function(chunk){
				// cb(null, body);
				done(null, body);
			});
		}).on('error', function(e){
			done(e);
		});
	}
	//function once all is completed
	],function(err, result){
		if (err) return console.error(err);
		console.log(result);
	});