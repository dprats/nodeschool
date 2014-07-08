// 1. Create a promise using the "Q" library
// 2. Pass console.log to the "then" method of our promise
// *3. Resolve the promise with a parameter "SECOND"
// 4. Print "FIRST" to the console using console.log

var q = require('q');

var def = q.defer();

def.promise.then(console.log);
def.resolve('SECOND');
console.log('FIRST');