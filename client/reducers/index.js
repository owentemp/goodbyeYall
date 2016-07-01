import { combineReducers } from 'redux';
import Destination from './reducer_destination'
import Airport from './reducer_airport'
import isLoggedIn from './reducer_login.js'

/**
 * combine reducers to rootReducer
 */
const rootReducer = combineReducers({
	destinations: Destination,
	airport: Airport,
	isLoggedIn: isLoggedIn
});

export default rootReducer;