export const changeOldPasswordForm = value => ({
	type: 'CHANGE_OLD_PASSWORD_FORM',
	payload: value
})

export const changeNewPasswordForm = value => ({
	type: 'CHANGE_NEW_PASSWORD_FORM',
	payload: value
})

export const changeNewPasswordConfirmForm = value => ({
	type: 'CHANGE_NEW_PASSWORD_CONFIRM_FORM',
	payload: value
})

export const clearChangePasswordForms = () => ({
	type: 'CLEAR_CHANGE_PASSWORD_FORMS'
})