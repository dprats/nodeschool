//PROBLEM

//Create a program that prints list of files in a given dir
//filtered by the extension of the files

//first argument: dir name
//second argument: extension

//REQUIREMENTS

//1. Write a module to do most of the work
//2. use async IO
//3. module must export a single function accepting (dirname, extension, callback)
//4. filename extension must be the same as was passed to the program
//5. must NOT print directly to the console from module file

//SOLUTION

//require the module
var filter = require('./6-modularA.js');

var dir = process.argv[2];
var extension = process.argv[3];

//call "filter" from the module above
//once the files are filtered, use the calllback
filter(dir, extension, function(err,list){

	if (err)
			return console.error('Error found!');
	//once filter is complete, we go through each filename
	//and print the filename to the stdout
	list.forEach(function(item){
		console.log(item);
	});
});



