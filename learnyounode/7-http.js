//PROBLEM

//Write a program that performs an HTTP GET to URL request provided
//to you as the first command-line argument. 

//Write the string contents of each "data" event from the response 
//to a new line on the console

//SOLUTION

//Call HTTP module
var http = require('http');

//HTTP.get is a shortcut for performing GET requests
http.get(process.argv[2],function(res){

	//set the response stream to UTF
	res.setEncoding('utf8');

	res.on('error', function(err){
		console.error;
	});

	res.on('data', function(chunk){
		console.log(chunk);
	});

	res.on('end', function(chunk){
		res.end();
	});

});