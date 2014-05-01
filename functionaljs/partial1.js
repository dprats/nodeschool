//create f that fixes first arg to console.log

//implement logging function that prepends namespace string
//function should take a string and print 
//messages with string pre-pended

// var slice = Array.prototype.slice;

// function logger(namespace){
// 	return function(){
// 		console.log.apply(console, [namespace].concat(slice.call(arguments)));
// 	}
// }
// module.exports = logger;

var sc = Array.prototype.slice;

function logger(prepend){

  	//return function which prepends the string
  	return function(){
  		console.log.apply(console, [prepend].concat(sc.call(arguments)));
  	}

}

module.exports = logger;