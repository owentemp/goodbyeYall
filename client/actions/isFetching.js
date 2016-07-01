'use strict'

export const IS_FETCHING ='IS_FETCHING';

/**
 * Action fired before the fetchPackage action is fired
 * Use this action to toggle fetching props in state to true to render loader
 * @param {bool} bool - is package being fetched
 */
export function changeFetching(bool){
	return {
		type: IS_FETCHING,
		payload: bool
	}
}
