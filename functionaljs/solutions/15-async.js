//PROBLEM

// Fix this code:

// function loadUsers(userIds, load, done) {
//   var users = []
//   for (var i = 0; i < userIds.length; i++) {
//     users.push(load(userIds[i]))
//   }
//   return users
// }

// module.exports = loadUsers

//Task: Fix this code! The callback should be called with 
//all the users loaded.

//The order of the users should match the order of 
//supplied user ids. Because this function is asynchronous, we 
//do not care about its return value.

//a)userIds = array of user ids
//b)load = function to retrieve a user by its id. it expects a callback
//c) done: function that expects an array of user objects

//SOLUTION

function loadUsers(userIds,load, done){
	var users =[]; //array where we will place the users
	var usersLoaded =0; //number to keep track of how many users loaded

	//for every id in the array passed...
	//we call a function with the id passed and its index in the array
	userIds.forEach(function(id,index){
		//call the load function with an id as argument
		//and a callback which places the retrieved user
		//in the correct place
		load(id,function(user){
			users[index] = user;
			usersLoaded++;
			//if the number of users loaded is equal
			//to total number of users, return
			//we need this because users may be loaded at different
			//times so we need to keep track of overall count
			if (usersLoaded == userIds.length) return done(users);
		});
	});
}

module.exports = loadUsers;