const INITIAL_STATE = {
	PLN: {
		currencyName: 'PLN',
		currencyNumber: 23632
	},
	USD: {
		currencyName: 'USD',
		currencyNumber: 3450
	},
	EUR: {
		currencyName: 'EUR',
		currencyNumber: 7530
	},
	GBP: {
		currencyName: 'GBP',
		currencyNumber: 234
	},
	CHF: {
		currencyName: 'CHF',
		currencyNumber: 1200
	}
}


const balanceReducer = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'CHANGE_PLN_NUMBER':
			return {
				...state,
				PLN: {
					currencyName: 'PLN',
					currencyNumber: action.payload
				}
			}
			case 'CHANGE_USD_NUMBER':
				return {
					...state,
					USD: {
						currencyName: 'USD',
						currencyNumber: action.payload
					}
				}

				case 'CHANGE_EUR_NUMBER':
					return {
						...state,
						EUR: {
							currencyName: 'EUR',
							currencyNumber: action.payload
						}
					}
					case 'CHANGE_GBP_NUMBER':
						return {
							...state,
							GBP: {
								currencyName: 'GBP',
								currencyNumber: action.payload
							}
						}
						case 'CHANGE_CHF_NUMBER':
							return {
								...state,
								CHF: {
									currencyName: 'CHF',
									currencyNumber: action.payload
								}
							}
							default:
								return {
									...state
								}
	}
}
export default balanceReducer;