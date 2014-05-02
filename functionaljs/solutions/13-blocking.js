//PROBLEM

//Modify recursive 'repeat' function provided in boilerplate s.t. it
//does block the event loop.
//This necessarily requires repeat to be async

//A time out is queued to fire 1 second, which
//will print the results of the test and exit the process.
//'repeat' should release control of the event loop such
//that the timeout fires before the 1500 ms elapse

//BOILERPLATE

function repeat(operation, num){
	//modify this so it can be interrupted
	if (num <=0) return;
	//perform operation
	operation();
	//call setTimeout to perform repeat after 1ms
	//this returns control of the event loop for 1ms
	setTimeout(function(){
		repeat(operation, --num)
	},1);
	
}

module.exports = repeat;