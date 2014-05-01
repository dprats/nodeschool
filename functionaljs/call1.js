//write function duckCount that returns the number of arguments
//passed to it which have a property of 'quack' defined
//directly on them.
//do not match values inherited from prototypes

// var notDuck = Object.create({quack: true});
// var duck = {quack: true};
// duckCount(duck, notDuck);

// function duckCount() {
// 	//return length of an array of elements with quack property


// 	//force all the arguments into an array, then filter them 
//   return Array.prototype.slice.call(arguments).filter(function(obj) {
//   	//callback within filter() returning true if there is 'quack' property
//     return Object.prototype.hasOwnProperty.call(obj, 'quack')
//   }).length
// }

// module.exports = duckCount


function duckCount(){

	//return number of item = return length of pre-filtered array
	return Array.prototype.slice.call(arguments).filter(function(obj){
		return Object.prototype.hasOwnProperty.call(obj, 'quack');
		}
	).length;

}

module.exports =duckCount;
