//write program that spawns process from cmd & args
// returns single duplex stream

//use duplexer

var duplexer = require('duplexer');

//module to spawn process

var spawn = require('child_process').spawn;


//exporting function
module.exports = function(cmd, args){
	//spawn the process and return single stream
	var child = spawn(cmd, args);
	//joining together stdin and stdout here
	return duplexer(child.stdin, child.stdout);

};