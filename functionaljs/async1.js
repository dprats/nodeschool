//fix this code

//callback should be called with all the users loaded
//the order of the users should match the order of
//supplied user Ids. Because it is async, we do not care
//about the return value.

//Arguments
//	userIds: array of numeric ids
// 	load: function used to load user objects. Expects a numeric id
//				and a callback. the callback will be called with the
//				result of loading the user with the specified id
//	done: a F that expects array of user objects (retrieved)
//				retrieved from load

function loadUsers(userIds, load, done){

	var completed = 0;
	var users =[];
	userIds.forEach(function(id, index){
		load(id,function(user){
			users[index] = user;
			if (++completed === userIds.length) return;
		});
	});
}

module.exports = loadUsers;