'use strict'
let knex = require('../../db/db');


function fetchDestinationsFromDb(selectedPackage){
	return knex.pullDestinationsByPackage(selectedPackage)
		.then( (data) => console.log(data))


	///add closeDb function at end
}
fetchDestinationsFromDb("Seven Wonders of the World");