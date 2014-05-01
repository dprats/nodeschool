//write a prgram that will receive a single command line
// argument to a URL.
//using whilst and HTTP GET send GET requests
//to this URL until the response body contains the
//string 'meerkat'
//console.log the amount of GET requests needed

var async = require('async');
var http = require('http');

//call get requests until meerkat is delivered
//async.whilst(test, fn, callback)

var requestBody ='';
var count  =1;

async.whilst( 
	function(){

	return !/meerkat/.test(requestBody.trim());

}, 
	function(done){

		var body ='';
		http.get(process.argv[2], function(res){

			res.on('data', function(chunk){
				body +=chunk.toString();
				++count;
			});

			res.on('end', function(){
				requestBody = body;
				done();
			});

		}).on('error', done);


},function(err){
	if (err) return console.log(err);
	console.log(count);
})