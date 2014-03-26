//exercise my first async i/o

var fs = require('fs');

var file = process.argv[2];

fs.readFile(file, function(err, contents){
	//error handling
	if (err) throw err;
	//pass all the data to a variable
	var lines = contents.toString().split('\n').length -1;
	console.log(lines);
});
