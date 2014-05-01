var async = require('async');

var createUser = function(id, callback) {
	console.log("calling CU callback at id " + id);
  callback(null, {
    id: 'user' + id
  })
}
// generate 5 users
async.times(5, function(n, next){
	  console.log('n-high is ' + n);
    createUser(n, function(err, user) {
    	console.log('n-low is ' + n);
      next(err, user)
    })
}, function(err, users) {
  // we should now have 5 users
  console.log(users);
});