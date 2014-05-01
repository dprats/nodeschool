//PROBLEM

//create a program that prints a list of files in a 
//given directory, filtered by the extension of the files

//first argument: directory name
//second argument: file extension to filter by

//List of files should be printed to the console, one file per line

//SOLUTION

var fs = require('fs');
//we call path so we can read the filename extensions
var path = require('path');
var extension = process.argv[3];

fs.readdir(process.argv[2], function(err,files){

	if (err) throw err;
	//iterate through all the files from the directory
	files.forEach(function(file){
		if(path.extname(file) == '.' + extension){
			console.log(file);
		}
	});

});
