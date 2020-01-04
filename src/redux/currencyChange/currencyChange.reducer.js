const INITIAL_STATE = {
	firstSelect: '--',
	secondSelect: '--',
	howMuchBuy: '',
	howMuchSell: '',
}

const currencyChangeReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_FIRST_SELECT':
			return {
				...state,
				firstSelect: action.payload,
			}
			case 'CHANGE_SECOND_SELECT':
				return {
					...state,
					secondSelect: action.payload
				}
				case 'CHANGE_HOW_MUCH_BUY_SELECT':
					return {
						...state,
						howMuchBuy: action.payload
					}
					case 'CHANGE_HOW_MUCH_SELL_SELECT':
						return {
							...state,
							howMuchSell: action.payload
						}
						case 'CLEAR_ALL_CHANGE_CURRENCY':
							return {
								...state,
								secondSelect: '--',
									howMuchBuy: '',
									howMuchSell: '',
									firstSelect: '--',
							}
							default:
								return {
									...state
								}
	}
}

export default currencyChangeReducer;