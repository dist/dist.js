// dist platform
//
// Breaking down dist code into small unit objects

// All objects scratch space to get things going quicker (temporary)

var units = [

function () {
	// bootstrap object metadata ideas using ideas from package.json hah
	// do we want object metadata in the object memory space? or is that what the id will be for.. to go into a separate namespace to pull this data?
	// not using instance ideas very much am I. these objects are suppose to be dummie objects with methods and then in the stream I am suppose to instantize them .. namespace doesn't make sense!?
	this.meta = {
		id: 0, // not used at the moment
		name: 'defineConnection',
		rev: '0.0.1',
		author: 'someone', // will be object id pointing to author
	}

	this.config = {
		name: 'blah'
	}

},

function () { 
	this.meta = {
		id: 0, // not used at the moment
		name: db_connectToDb,
		rev: '0.0.1',
		author: 'someone', // will be object id pointing to author
	}
}

]

module.exports = units
