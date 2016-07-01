'use strict'

export const SET_AIRPORT = 'SET_AIRPORT'; 

/**
 * Action fired to when a user set origin airport
 * @param {bool} airport - is origin airport selected by user
 */

export function setAirport (airport){
	// console.log('line 12 setAirport.js', airport)
  return {
    type: SET_AIRPORT,
    payload: airport
  }
}
