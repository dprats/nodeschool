//given an array of strinfs, use array:reduce to 
//create an object that contains the n of times each
//string occurred in the array.
//Return the object directly

function countWords(stringArray){
	return stringArray.reduce(function(wordCount, word){
		//add or initialize each word to 1
		wordCount[word] = (++wordCount[word] || 1);
		return wordCount;
	}, {});
}

module.exports = countWords;