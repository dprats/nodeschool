//PROBLEM

//1st argument: file

//Use fs.createReadStream to pipe file to stdout

//SOLUTION

var fs = require('fs');

//create stream 
fs.createReadStream(process.argv[2]).pipe(process.stdout);