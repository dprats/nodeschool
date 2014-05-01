//modify recursive 'repeat' provided in boilerplate
//so it does not block event loop
//repeat must be asynchronous

//timeout is fired after 1 second to print results
//of the test and exit the process
//repeat should release control of the event loop
//such hat the timeout fires before 1500 milliseconds elapse

//try to perform as many operations as you can before
//timeout fires!


function repeat(operation, num){
	//modify this so it can be interrupted
	if (num <=0) return;

	if(num % 10 === 0){

		setTimeout(function(){
			repeat(operation, --num);
		});
	} else {
		repeat(operation, --num);
	}
	
}

module.exports = repeat;