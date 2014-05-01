//use array#reduce to implement simple array#map


//output:  function map that applies a function
//         to each item in an array and collects
//         results in a new array
//

module.exports = function arrayMap(arr, fn){
	//use arr.reduce to call fn on each item
	//note the use of all reduce variables
	return arr.reduce(function(previousArray,
														item,
														index,
														arr){
		return previousArray.concat(fn(item, index, arr));
	}, []);

}


// //example
// var arrayPrinces = map(arrayFrogs, convert);

// //example 2

// var nums = [1,2,3,4,5];
// var output = map(nums, function double(item){
// 	return item *2;
// });

// console.log(output) = [2,4,6,8,10]; 