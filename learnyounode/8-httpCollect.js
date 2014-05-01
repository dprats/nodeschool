//PROBLEM
//Write program that performs a HTTP GET request to a URL
//provided to you as the first "data" event and then Write
//the two lines to the console

//The first line you write should be an integer representing
//the number of characters received from the server

//Second line should contain the complete string of 
//characters sent by the server

var http = require('http');
var concat1 = require('concat-stream');
// var bl = require('bl')

var url = process.argv[2];

//perform GET request to URL
http.get(url, function(res){

	//concat takes the res buffers it and performs
	//callback on it when it is finished buffering
	res.pipe(concat1(function(data){
		//since data is a buffer, we convert to string
		data = data.toString(); 
		//console the results:
		console.log(data.length);
		console.log(data);
	}));
});


