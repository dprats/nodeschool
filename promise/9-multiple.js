// 1. Construct two promises using Q's defer
// 2. Construct a function "all" that accepts two promises as arguments.
//    Your function should create an internal promise using Q's defer and return it!
//    Your function should create a counter variable with initial value of 0.
//    Your function should attach "then" fulfillment handlers to both
//    promises which increment an internal counter and fulfill the function's
//    internal promise with an array containing BOTH values IF the counter reaches 2.
//    You should ALSO attach rejection handlers to both promises which both reject
//    the internal promise!
// 3. Pass your two promises into your new function and then attach console.log as 
//    a fulfillment handler to the promise returned by your function.
// 4. Attach a function to setTimeout that resolves both of the promises you created
//    and passed to your function with the values "PROMISES" and "FTW" respectively.
//    Set the timeout delay to 200ms.

var Q = require('q');


function all(p1, p2){

   var p = Q.defer();
   var counter = 0;
   var v1;
   var v2;

   p1.then(function(val){
      v1 = val;
      counter++;
      if (counter >=2){
         p.resolve([v1,v2]);
      }
   }).then(null, p.reject)
   .done();


   p2.then(function(val){
      v2 = val;
      counter++;
      if (counter>=2){
         p.resolve([v1,v2]);
      }
   }).then(null, p.reject)
   .done();

   return p.promise;
}

var def1 = Q.defer();
var def2 = Q.defer();


all(def1.promise,def2.promise)
.then(console.log)

setTimeout(function(){
   def1.resolve('PROMISES');
   def2.resolve('FTW');
},200);