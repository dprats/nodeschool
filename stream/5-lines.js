//PROBLEM

//1. Convert even-numbered lines to upper case
//2. Convert odd-numbered lines to lower case

// One 
// Two 
// Three
// Four

// Should convert to

// one 
// TWO 
// three 
// FOUR 

//SOLUTION

var through = require('through');
var split = require('split');
var linecount =0;

var tr = through(function(buf){
	linecount++;
	this.queue( ( (linecount %2 ==0)
		?buf.toString().toUpperCase()
		:buf.toString().toLowerCase() 
								)+'\n');
});

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout);
