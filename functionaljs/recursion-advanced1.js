//implement a recursive F that returns all of the
//unique dependencies of a module, sorted alphabetically.

//Dependencies should be printed as:
//	dependency@version
//	inflection@1.2.6
//multiple versions of the same module are allowed
//duplicate modules of the same version should be removed

//Arguments
//Tree: a dependency tree.

// var loremIpsum = {
// 	"name": "lorem-ipsum",
// 	"version": "0.1.1",
// 	"dependencies": {
// 		"optimist": {
// 			"version": "0.3.7",
// 			"dependencies": {
// 				"wordwrap": {
// 					"version": "0.0.2"
// 				}
// 			}
// 		},
// 		"inflection": {
// 			"version": "1.2.6"
// 		}
// 	}
// }

// var dependencies = loremIpsum.dependencies;
// console.log(dependencies);

function getDependencies(mod, result){
	
	//initial run, assign result array
	var result = result || [];

	//initial run, assign an array of top tier of dependencies
	var dependencies = mod.dependencies || [];

	//get the dependencies of top layer and place in an array
	//call an anonymous function on each of the items of this array
	Object.keys(dependencies).forEach(function(dep){

		//declare the key to be placed in the result
		var key = dep + '@' + mod.dependencies[dep].version;
		//if the depedency-key passed is not already in results
		//array, then add it.
		if (result.indexOf(key) === -1) result.push(key);
		//do the same operation for a lower tier of dependencies
		//call F on ('Optimist tree', result[]);
		getDependencies(mod.dependencies[dep], result);
	});

	//return the array with all the results
	//this return is necessary in order ti traverse the tiers
	return result.sort();

}

module.exports = getDependencies;