//PROBLEM

// Implement a recursive function that returns all of the unique dependencies, and sub-dependencies
// of a module, sorted alphabetically. Dependencies should be printed as dependency@version
// e.g. 'inflection@1.2.6'. Multiple versions of the same module are allowed, but duplicates modules of
// the same version should be removed.


//EXAMPLE OF A DEPENDENCY TREE

var loremIpsum = {
  "name": "lorem-ipsum", 
  "version": "0.1.1",
  "dependencies": {
    "optimist": {
      "version": "0.3.7",
      "dependencies": {
        "wordwrap": {
          "version": "0.0.2"
        }
      }
    },
    "inflection": {
      "version": "1.2.6"
    }
  }
}

//getDependencies(loremIpsum); // => [ 'inflection@1.2.6', 'optimist@0.3.7', 'wordwrap@0.0.2' ]

//SOLUTION

function getDependencies(tree, currentResult){

	//initialize the current result or pass previous
	currentResult = currentResult || [];
	//initialize the current set of dependencies for this 
	//level down the tree
	var deps = tree.dependencies || [];

	//get an array of every dependency in this level of 
	//the tree and iterate over all of them
	// console.log(deps);
	Object.keys(deps).forEach(function(dep){
		var nameWithVersion = dep +'@'+deps[dep].version;
		// console.log(nameWithVersion);
		//if the generated name/version is not present in
		//the current results array, then add it
		if (currentResult.indexOf(nameWithVersion) == -1){
			currentResult.push(nameWithVersion);
		}
		//iterate down to the next level, by calling the same
		//function but instead of on 'tree', call it
		//on tree.dependencies[dep] where dep is the current
		//dependency branch we are looking at from object.keys(deps)
		getDependencies(deps[dep],currentResult);
	});

	return currentResult.sort();
}

// console.log(getDependencies(loremIpsum));

module.exports = getDependencies;
