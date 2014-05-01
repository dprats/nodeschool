function curry3(fun){
	return function(three){
		return function(two){
			return function(one){
				return fun(one, two, three);
				//abc(6,2,3)
			}
		}
	}
}

//curryN
//Arguments: 
//	fn: operation we wnat to curry
//	n: optional number of arguments to curry

//if not supplied, curryN should use the fn's 
//arity as value of 'n'

// function abc(one, two, three){
// 	return one/two/three;
// } 

// var curryC = curry3(abc); //return function(three)...
// var curryB = curryC(2); //function(2)
// var curryA = curryB(3);

// console.log("curryC is: \n" + curryC + '\n');
// console.log("curryB is: \n " + curryB + '\n');
// console.log("curryA is: \n " + curryA + '\n');

// console.log(curryA(6));


function add3(one, two, three){
	return one + two + three;
}

var curryC = curryN(add3);
var curryB = curryC(1);
var curryA = curryB(2);

console.log(curryA(3)); //3 +2 + 1 = 6
console.log(curryA(10)); //10 +2 +1 = 13

function curryN(fn){
	if (arguments.length === 1) return fun
}













