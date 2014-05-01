//PROBLEM

//Write a  function 'duckcount' that returns the number
//of arguments passed to it which have a property 
//"quack" defined directly on them. Do not match values
//inherited from prototypes.

function duckCount(){
	var count =0;
	//for each element in array-like object containing arguments.. 
	Array.prototype.forEach.call(arguments, function(arg){
		//...check if it contains a quack property
		if (Object.prototype.hasOwnProperty.call(arg, 'quack')){
			// if it contains the property, increase the count
			count++;
		}
	});
	//return the count
	return count;
}

module.exports = duckCount;
