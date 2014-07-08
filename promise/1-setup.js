//task
//use the Q library to create a promise
//pass console.log to the "THEN" method of the promise
'use strict';

var q = require('q');
var def = q.defer(); //manually create a promise

def.promise.then(console.log);
setTimeout(def.resolve, 300, 'RESOLVED!');