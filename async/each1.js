//one may need to run series of async calls
//without caring about the return data but check if
//any throw errors (sometimes not even that)
//for example:

var http = require('http');
var async = require('async');

async.each(['cat', 'meerkat', 'penguin'], function(item, done){

	var opts = {
		hostname: 'http://httpbin.org',
		path: '/post',
		method: 'POST'
	};

	var req = http.request(opts, function(res){
		res.on('data', function(chunk){

		});

		res.on('end', function(chunk){
			return done();
		})

		req.write(item);
		req.end();

	});

}, 
//calback
function(err){
	if (err) console.error(err);
});