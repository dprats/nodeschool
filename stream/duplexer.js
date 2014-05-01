//write a program that exports a function that
//spawns a process from a 'cmd' string and 'args' array
//AND returns a single duplex stream joining together
//the stdin and stdout of the spawned process

var spawn = require('child_process').spawn;
var duplex = require('duplexer');

module.exports = function(cmd, args){
	//spawn the process
	//return a single stream joining together stdin and stdout
	var child = spawn(cmd, args);
	return duplex(child.stdin, child.stdout);

}

//solution

   // var spawn = require('child_process').spawn;
   //  var duplexer = require('duplexer');
    
   //  module.exports = function (cmd, args) {
   //      var ps = spawn(cmd, args);
   //      return duplexer(ps.stdin, ps.stdout);
   //  };
