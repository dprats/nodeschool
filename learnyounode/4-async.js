//write a program that uses ASYNC filesystem operation
//to read a file and print the number of newlines

var fs = require('fs');

//reading the file whole file, when complete
//perform the callback function
fs.readFile(process.argv[2], function(err, data){
	if (err) throw err;
	var newlines = data.toString().split('\n').length -1;
	console.log(newlines);
});
