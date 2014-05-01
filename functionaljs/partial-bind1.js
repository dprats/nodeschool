//use function:bind to implement logging
//that allows you to namespace messages

//input= namespace string
//return: f that prints messages with namespace prepended

function loggerBind(prepend){

	//return console.log which prepends messages
	// function(){
		return console.log.bind(console, prepend);
	// }
}

//export function
module.exports = loggerBind;

// joeLogger = loggerBind('joe');