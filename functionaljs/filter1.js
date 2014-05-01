//use array#filter
//getShortMessages(array with .message properties)
//AND prints any messages that are less than 50 char long

module.exports = function getShortMessages(messages){

	return messages.filter(function(item){
		return (item.message.length < 50);
	}).map(function(item){
		return item.message;
	});
};

 // module.exports = function getShortMessages(messages) {
 //    return messages.filter(function(item) {
 //      return item.message.length < 50
 //    }).map(function(item) {
 //      return item.message
 //    })
 //  }
  
