const INITIAL_STATE = {
	oldPassword: '',
	newPassword: '',
	newPasswordConfirm: ''
}

const changePasswordReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_OLD_PASSWORD_FORM':
			return {
				...state,
				oldPassword: action.payload
			}
			case 'CHANGE_NEW_PASSWORD_FORM':
				return {
					...state,
					newPassword: action.payload
				}
				case 'CHANGE_NEW_PASSWORD_CONFIRM_FORM':
					return {
						...state,
						newPasswordConfirm: action.payload
					}
					case 'CLEAR_CHANGE_PASSWORD_FORMS':
						return {
							...state,
							oldPassword: '',
								newPassword: '',
								newPasswordConfirm: ''

						}
						default:
							return {
								...state
							}
	}
}


export default changePasswordReducer;