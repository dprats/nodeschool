//Convert data from `process.stdin` to 
//upper-case data on `process.stdout`
//using the `through` module.

// var through = require('through');
// var tr = through(write,end);

// function write(buf){
// 	this.queue(buf.toString().toUpperCase());

// }

// function end(){
// 	this.queue(null);
// }

// process.stdin.pipe(tr).pipe(process.stdout);


//official solution

var through = require('through')
//create stream with through
var tr = through( function(buf){
	this.queue(buf.toString().toUpperCase());
});


process.stdin.pipe(tr).pipe(process.stdout);