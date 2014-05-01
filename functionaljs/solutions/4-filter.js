
// Use Array#filter to write a function called `getShortMessages`.

// `getShortMessages` takes an array of objects with '.message' properties
// and prints any messages that are *less than < 50 characters long*.

// Arguments:

// * messages: an Array of 10 to 100 random objects that look something like this:

// ```js

// {
//   message: 'Esse id amet quis eu esse aute officia ipsum.' // random
// }

// ```

// Conditions:

// * Do not use for loops or Array#forEach.

// Hint: Try chaining some Array methods!

// Expected Output:

// The function should return an array containing the messages themselves, without their containing object.

module.exports = function getShortMessages(messages){

	var filtered = messages.filter(function(item){
		if (item.message.length < 50){
			return true;
		}
		return false;
	}).map(function(item){
		return item.message;
	});

	return filtered;

}