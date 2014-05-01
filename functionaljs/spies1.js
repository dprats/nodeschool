function Spy(target, method){

	//declare counter
	var result = { count: 0};

	//declare old method to avoid infinite loop
	var oldMethod = target[method];

	//re-assign method
	target[method] = function(){
		//change counter
		result.count++;
		//return changed method
		return oldMethod.apply(target, arguments);
	}
	return result;
}

module.exports = Spy;

