const INITIAL_STATE = {
	isLogged: false,
	correctLogin: 'bankuser',
	correctPassword: 'passwd',
}


const loginReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'SIGN_IN_THE_USER':
			return {
				...state,
				isLogged: action.payload.isLogged,
			}
			default:
				return state;
	}
}

export default loginReducer;