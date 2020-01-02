const INITIAL_STATE = {
	isLogged: false,
	correctLogin: 'bankuser',
	correctPassword: 'passwd',
}


const loginReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_IS_LOGGED_STATUS':
			return {
				...state,
				isLogged: !state.isLogged,
			}
			default:
				return {
					...state
				}
	}
}

export default loginReducer;