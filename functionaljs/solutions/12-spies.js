//PROBLEM
//Create a spy that keeps track of how many times a function is called

//SOLUTION

function Spy(target, method){
	var unchangedFunction = target[method];
	//Spy creates an object with 'count' which will be called
	var spyCount = {
		count: 0
	};

	//change the method slightly to keep track of count
	target[method] = function(){
		//increase the count section of spyCount before returning function
		spyCount.count++;
		//return original function called on target
		return unchangedFunction.apply(target, arguments);
	}
	return spyCount;
}

module.exports = Spy;