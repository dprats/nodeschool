//provided with 3 urls as first three command line arguments

//collect the complete content provided to you by each of the URLs
//print out the data as a string, one line per 
//print in same order as they were passed


var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;


function printResults () {
	for (var i=0; i < 3; i++){
		console.log(results[i]);
	}
}

function httpGet (index) {
	http.get(process.argv[2 + index], function(response){
		response.pipe(bl(function (err, data) {
			if (err) {
				return console.error(data);
			}
			results[index] = data.toString();
			count++;

			if (count ==3){
				printResults();
			}			
		}));
	});
}

for (var i =0; i < 3; i++){
	httpGet(i);
}