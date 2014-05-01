
// Task:

// Return a function that takes a list of valid users, and returns a function that returns true
// if all of the supplied users exist in the original list of users.

// You only need to check that the ids match.

// Arguments:

// * goodUsers: a list of valid users

// Use array#some and Array#every to check every user passed to your returned
// function exists in the array passed to the exported function.

module.exports = function checkUsersValid(goodUsers){
	//return a function with the list of good users already there
	return function(submittedUsers){
		//check if all the submitted users are goodUsers
		return submittedUsers.every(function(submittedUser){
			//if user passed matches SOME good user, return true
			return goodUsers.some(function(goodUser){
				return goodUser.id === submittedUser.id;
			});
		});
	};
};