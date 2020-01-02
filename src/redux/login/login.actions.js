export const changeIsLoggedStatus = () => ({
	type: 'CHANGE_IS_LOGGED_STATUS'
})

export const changePassword = value => ({
	type: 'CHANGE_CORRECT_PASSWORD',
	payload: value
})