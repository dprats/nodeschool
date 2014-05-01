// Array#reduce

// Task: Given an Array of strings, use Array#reduce to create an object that
// contains the number of times each string occured in the array. Return the
// object directly (no need to console.log).

// Arguments:

// * inputWords: An array of random Strings.

// Conditions:

// * Do not use any for/while loops.
// * You do not need to define any additional functions
//  unless a stub is provided in the boilerplate.

// [0,1,2,3,4].reduce(function(previousValue, currentValue, index, array){
//   return previousValue + currentValue;
// });

function countWords(stringArr){

	//for every element of array, we call reduce
	return stringArr.reduce(function(wordCount, word){
		wordCount[word] = (++wordCount[word] || 1);
		return wordCount;
	}, {}); //the first arg: wordCount is initialized to {}
};

module.exports = countWords;
