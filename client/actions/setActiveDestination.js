'use strict'

export const SET_ACTIVE_DESTINATION = 'SET_ACTIVE_DESTINATION';

/**
 * Action fired to when a user click on a photo on photoroll(passive destination)
 * Use this action to set the destination state of active and passive destinations
 * @param {number} _id - the id of a destination
 */
export function setActiveDestination (_id){
  return {
    type: SET_ACTIVE_DESTINATION,
    payload: _id
  }
}
