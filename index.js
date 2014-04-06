// dist js Platform
// 0.0.1
// Find dist details using your favorite method :)


// require all object files in directory automatically
// will move this to db eventually
// defining the standard as we go along this will be 0.0.0.1 of joe's standard
// constantly refactor is the mission 
// object naming/namespace. objects will have a random name created using a hash 

var objects = []

[ 'data', 'streams', 'units' ].forEach(filename) { objects.push(require(__dirname + '/' + filename + '.js')) }

// todo: execute here or let parent ? check for parent and if no parent then execute!

module.exports = objects
