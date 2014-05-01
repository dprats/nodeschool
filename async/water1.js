//3 ways of using async:
//1. callback hell
//2. Promise package - adds a layer of abstraction
//3. async package - simple code without new layer of abstraction

//one may need to do multiple async calls one after another
//with each call dependent on the result of prev async call
//we can do this with the help of async.waterfall

//following code will get a GET request to LC:3131
//in the first waterfall function. the response body is parsed
//as an argument to the next waterfall function via the
//callback. The second function in waterfall accepts the
//body as a parameter and JSON.parse's it to get to
//the port property THEN it does another GET request

var http = require('http');
var async = require('async');

async.waterfall([

	//Tasks: function(cb), function(body, cb)
	//exkey: function(callback), function(arg1, arg2, callback) 

//function 1
	function(cb){
		var body = '';

		//res is JSON encoded object like the following {port:3132}
		http.get("http://localhost:3131", function(res){
			res.on('data', function(chunk){
				body += chunk.toString();
			});

			res.on('end', function(){
				cb(null, body);
			});

		}).on('error', function(e){
			cb(err);
		});
	},

//function 2
	function(body, cb){
		var.port = JSON.parse(body).port;

		var body = '';

		http.get('http://localhost:' + port, function(res){
			res.on('data', function(chunk){
				body +=chunk.toString();
			});

			res.on('end', function(){
				cb(null, body);
			})

		}).on('error', function(e){
			cb(err);
		})

	}
], 
	//function to call once all are complete
	function (err, result){
	if(err) return console.error(err);
	console.log(result);
});