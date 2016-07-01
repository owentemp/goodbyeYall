'use strict'

export const IS_LOGGED_IN ='IS_LOGGED_IN';

/**
 * Action fired to when a user is logged in
 * Use this action to indicate a user is logged in and render navBar container
 * @param {bool} bool - is user logged in
 */
export function changeLogin(bool){
	return {
		type: IS_LOGGED_IN,
		payload: bool
	}
}
