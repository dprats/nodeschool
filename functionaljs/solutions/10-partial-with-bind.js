//PROBLEM
//*Use Function#bind** to implement a logging function that allows you to namespace messages.



//SOLUTION
//function.bind sets "this" to "console" and it
//adds "str" to the beginnging of any arguments 
//passed to console (which THIS refers to)

function logger(str){
	return console.log.bind(console,str)
};

module.exports = logger;