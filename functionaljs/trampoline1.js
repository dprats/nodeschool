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

function factorial (n) {
  return n
  ? n * factorial(n - 1)
  : 1
}


function trampoline(fn){
	while(fn && typeof fn === 'function'){
    console.log('TRAMPOLINE:invoking f:\n        %s\n', fn);
    fn = fn();
	}
}

function ape(operation, num){
	trampoline(function(){
    console.log('\nAPE: calling repeat with operation:\n\n%s \nand num:\n\n%s\n', operation,num);
		return repeat(operation, num);
	});
}

// var x = 4;
// console.log('%s!: %s',x,factorial(4));
console.log(ape(factorial,4));