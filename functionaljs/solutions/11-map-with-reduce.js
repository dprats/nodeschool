//PROBLEM

//use array:reduce to implement a single version
//of array:map

//Function "map" that applies function to each item
//in an array and collects the results in a new array

//INPUT
//a) array of any type
//b) operation to apply to input

//SOLUTION

function arrayMap(arr,fn){

	return arr.reduce(function(previousArray, item, index, array){
		//solution passes for fn(item)
		//but we pass fn(item, index, arr) because
		//we do not know what fn is composed of. If this were
		//arr#map, the function passed to map may require all these
		return previousArray.concat(fn(item, index, arr));
	},[]);
}

module.exports = arrayMap;
