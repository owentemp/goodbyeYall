'use strict'
import axios from 'axios';

export const FETCH_PACKAGE = 'FETCH_PACKAGE';

/**
 * Action fired when a user select a package
 * @param {string} package_name - The name of the travel package.
 */
export function fetchPackage(package_name) {
	//get user originairport info and send together with the request
	axios.defaults.headers.common['originairport'] = localStorage.getItem('originairport');
	let destinations = axios.get('/packages/selectpackage/' + package_name)
		.then(function(obj) {
			// console.log('line 11 fetchPackage.js', obj)
			return {
				data: obj.data,
				package_name: package_name,
				fetching: false
			}
		});
	return {
		type: FETCH_PACKAGE,
		payload: destinations
	}
}