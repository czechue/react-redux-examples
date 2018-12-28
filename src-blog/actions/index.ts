import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';

import { ThunkDispatch, ThunkAction, ThunkMiddleware } from 'redux-thunk';
import { Dispatch } from 'redux';

// using Lodash:
// export const fetchPostsAndUsers = () => async (
// 	dispatch: any,
// 	getState: any
// ) => {
// 	await dispatch(fetchPosts());
// 	const userId = _.uniq(_.map(getState().posts, 'userId'));
// 	userId.forEach((id) => dispatch(fetchUser(id)));
// };

// or the same with _.chain:
// _.chain(getState().posts)
// 	.map('userId')
// 	.uniq()
// 	.forEach((id) => dispatch(fetchUser(id))
//  .value()

export const fetchPostsAndUsers = () => async (
	dispatch: any,
	getState: any
) => {
	await dispatch(fetchPosts());
	const userIds = new Set(getState().posts.map((post: any) => post.userId));
	userIds.forEach((id) => dispatch(fetchUser(id)));
};

export const fetchPosts = () => async (dispatch: Dispatch) => {
	const response = await jsonPlaceholder.get('/posts');

	dispatch({ type: 'FETCH_POSTS', payload: response.data });
};

export const fetchUser = (id: any) => async (dispatch: Dispatch) => {
	const response = await jsonPlaceholder.get('/users/' + id);

	dispatch({ type: 'FETCH_USER', payload: response.data });
};

// WRONG ! _.memoize use
// export const fetchUser = function(id: any) {
// 	return _.memoize(async function(dispatch: Dispatch) {
// 		const response = await jsonPlaceholder.get('/users/' + id);

// 		dispatch({ type: 'FETCH_USER', payload: response.data });
// 	});
// };

// GOOD
// export const fetchUser = (id: any) => (dispatch: Dispatch) =>
// 	_fetchUser(id, dispatch);

// const _fetchUser = _.memoize(async (id, dispatch) => {
// 	const response = await jsonPlaceholder.get('/users/' + id);

// 	dispatch({ type: 'FETCH_USER', payload: response.data });
// });
