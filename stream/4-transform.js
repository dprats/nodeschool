//PROBLEM 4

//Convert data from stdin to uppercase using "through" module

//through(write,end) returns a readable/writeable stream
//given "write" and "end" functions


//SOLUTION
var through = require('through');

//define the write function of tr
var tr = through(function(buf){
	//for every buffer, convert to string and capitalize
	this.queue(buf.toString().toUpperCase());
});

//pipe stdin to TR to stdout
process.stdin.pipe(tr).pipe(process.stdout);