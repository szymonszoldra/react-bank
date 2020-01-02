export const changeStateOfTheLogin = value => ({
	type: 'LOGIN_CHANGE',
	payload: value,
})

export const changeStateOfThePassword = value => ({
	type: 'PASSWORD_CHANGE',
	payload: value,
})

export const clearTheForms = () => ({
	type: 'CLEAR_THE_FORMS'
})