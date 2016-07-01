'use strict'
import { IS_LOGGED_IN } from '../actions/isLoggedIn';

let INITIAL_STATE = { isLoggedIn: !!localStorage.getItem('goodbyeyall.fb_id') };


/**
 * airport reducer that change set the state of isLoggedIn
 * @param {object} action - { type: {string}, paylaod : {object} }
 */

export default function (state = INITIAL_STATE, action) {
  switch (action.type){
		case IS_LOGGED_IN:
    	let newState = {};
    	newState.isLoggedIn = action.payload;
    	return newState
		default:
			return state
	}
}