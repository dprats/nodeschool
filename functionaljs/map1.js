//convert following code from for-loop to array#mmap

//input: Array of 1 to 20 integers between 0,9
//do NOT use while
//do NOT use additional functions
//use MAP

function doubleAll(numbers){
	return numbers.map(function(x){return 2*x;});
}

module.exports = doubleAll;