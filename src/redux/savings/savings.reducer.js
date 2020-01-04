const INITIAL_STATE = {
	sendPLNValue: '',
	onSavings: 0,
	transferToPLN: '',
	currentPercent: 2.4,
}

const savingsReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CLEAR_FORMS_IN_SAVINGS':
			return {
				...state,
				sendPLNValue: '',
					transferToPLN: ''
			}
			case 'CHANGE_PLN_FORM_IN_SAVINGS':
				return {
					...state,
					sendPLNValue: action.payload
				}
				case 'CHANGE_TRANSFER_FORM_IN_SAVINGS':
					return {
						...state,
						transferToPLN: action.payload
					}
					case 'CHANGE_SAVINGS':
						return {
							...state,
							onSavings: (Number(state.onSavings) + Number(action.payload)).toFixed(2)
						}
						default:
							return {
								...state
							}
	}
}

export default savingsReducer;