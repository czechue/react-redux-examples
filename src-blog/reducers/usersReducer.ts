export default (state = [] as any, action: any) => {
	switch (action.type) {
		case 'FETCH_USER':
			return [ ...state, action.payload ];
		default:
			return state;
	}
};
