//take f that takes list of valid users and returns function
//that returns true if all of the users exist in original list
//of users

// module.exports = function checkUsersValid(users) {
//   return function(submittedUsers) {
//     return submittedUsers.every(function(submittedUser) {
//       return users.some(function(user) {
//         return user.id === submittedUser.id
//       })
//     })
//   }
// }

//export function to create checker function

module.exports = function checkUsersValid(goodUsers){

	//return function that takes list and returns
	//list of users which are good
	return function(submittedUsers){
		//return array where EVERY user matches some GOODUSERS
		return submittedUsers.every(function(submittedUser){
			//return array of goodUsers which match SOME goodUsers
			return goodUsers.some(function(goodUser){
				//condition is to check if a goodUser matches a submittedUser
				return goodUser.id === submittedUser.id;
			});
		});
	}
}