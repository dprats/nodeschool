// 1. Create a function "throwMyGod" that throws an Error with 
//    text "OH NOES"
// 2. Create a function "iterate" that prints the first argument 
//    (an integer) to it and then returns that argument + 1;
// 3. Create a promise chain that wraps your iterate method using Q's
//    fcall then a series of iterations that attempts to perform iterate
//    10 times.  
// 4. Attach console.log as a rejection handler at the bottom of your
//    chain.
// 5. Insert a call to "throwMyGod" after your 5th call of "iterate"
"use strict"

var Q = require('q');

function throwMyGod(){
	throw new Error('OH NOES');
}

function iterate(x){
	console.log(x);
	return ++x;
}

Q.fcall(iterate,1)
.then(iterate)
.then(iterate)
.then(iterate)
.then(iterate)
.then(throwMyGod)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
// .then(iterate)
.then(null, console.log)
.done();


