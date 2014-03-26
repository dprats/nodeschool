//Write a program that performs an HTTP GET request to a URL 
var http = require('http');
var bl = require('bl');

//provided to you as the first command-line argument.

var url = process.argv[2];

// Collect all data from the server (not just the first 
//"data" event)

http.get(url, function(res){

	res.pipe(bl(function(err, data){
		if(err) return console.error(err);
		//console.log representing the number of characters
		var characterNumber = data.toString().length;
		console.log(characterNumber);
		//console.log string of characters sent by the server.
		var characters = data.toString();
		console.log(characters);

	}));
});