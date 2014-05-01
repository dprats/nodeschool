//repeat will take a function operation, number NUM
//and invoke operation num times

// var count = 0;

// repeat(function(){
// 	count++;
// }, 100);

// console.log('executed %d times', count); //executed 100 times

//modify boilerplate below so it uses trampoline
//to conyinuously call itself synchrnously

//you can assume the operation passed to repeat does not
//tale arguments and return is not important

function repeat(operation, num){
	if (num <=0) return;
	return function(){
		operation();
		return repeat(operation, --num);
	}
}

function trampoline(fn){
	while(fn && typeof fn === 'function'){
		fn = fn();
	}
}

module.exports = function(operation, num){
	trampoline(function(){
		return repeat(operation, num);
	});
}

  // function repeat(operation, num) {
  //   if (num <= 0) return
  //   return function() {
  //     operation()
  //     return repeat(operation, --num)
  //   }
  // }
  
  // function trampoline(fn) {
  //   while(fn && typeof fn === 'function') {
  //     fn = fn()
  //   }
  // }
  
  // module.exports = function(operation, num) {
  //   trampoline(function() {
  //     return repeat(operation, num)
  //   })
  // }
