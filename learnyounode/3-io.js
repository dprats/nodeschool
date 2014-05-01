//write a program that uses a single synchronous
//filesystem operation to read a file and print the
//number of newlines it contains to console

//full path to the file to be read will be provided
//as the first command-line argument

//necessary to read files
var fs = require('fs');


//read file into the buffer
var bf = fs.readFileSync(process.argv[2]);

//grab the buffer returned, create into a string, 
//convert string to an array split by '\n' and count
//the number of elements
var newlines = bf.toString().split('\n').length -1;

console.log(newlines);