//PROBLEM

//use partial application to create a function that fixes the
//first argument to 'console.log'

//implement a logging function that prepends the first argument
//to console

//SOLUTION

function logger(str){
	//return a function that console.log's a prepended string
	
	return function(){
		//convert the arguments to an array
		var args = Array.prototype.slice.call(arguments).unshift(str);
		//prepend the "str" variable to the args array
		args.unshift(str);
		//call console.log with this=console and updated args array
		console.log.apply(console,args);
	}
}

module.exports = logger;