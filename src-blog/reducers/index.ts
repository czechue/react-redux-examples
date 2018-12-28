import { combineReducers } from 'redux';
import postsReducer from './postsReducer';
import usersReducer from './usersReducer';

export default combineReducers({
	posts: postsReducer,
	users: usersReducer
});

// RULES:
/**
 * 1. Must return any values besides 'undefined'
 * 2. Produces 'state' or data to be used inside of app using only previous state and the action
 * 3. Must not return reach 'out of itself' to decide what value to return (reducers are pure)
 * 4. Must not mutate its input 'state' argumnet
 */

// SAFE STATE UPDATES:
/**
	* ARRAYS:
	* 1. Removing an element from an array 
	* - BAD: state.pop()
	* - GOOD: state.filter(el => el !== 'hi')
	* 
	* 2. Adding an element to an array:
	* - BAD: state.push('hi')
	* - GOOD: [...state, 'hi']
	*
	* 3. Replacing an element in an array:
	* - BAD: state[0] = 'hi'
	* - GOOD: state.map(el => el === 'hi' ? 'bye' : el)
	*
	* OBJECTS:
	* 1. Updating a property in an object: 
	* - BAD: state.name = 'Sam'
	* - GOOD: {...state, name: 'Sam'}
	*
	* 2. Adding a property to an object:
	* - BAD: state.age = 30
	* - GOOD: {...state, age: 30}
	*
	* 3. Removing a property from an object:
	* - BAD: delete state.name
	* - GOOD: {...state, age: undefined} || _.omit(state, 'age')
	*
	*
  */
