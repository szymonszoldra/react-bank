const INITIAL_STATE = [{
		currencyName: 'PLN',
		currencyNumber: 23632,
	},
	{
		currencyName: 'USD',
		currencyNumber: 3450
	},
	{
		currencyName: 'EUR',
		currencyNumber: 7530
	},
	{
		currencyName: 'GBP',
		currencyNumber: 234
	},
	{
		currencyName: 'CHF',
		currencyNumber: 1200
	}
]




const balanceReducer = (state = INITIAL_STATE, action) => {

	const getIndex = name => state.indexOf(item => item.currencyName === name);
	switch (action.type) {
		case 'CHANGE_PLN_NUMBER':
			return [...[...state].split(getIndex('PLN'), 1), {
				currencyName: 'PLN',
				currencyNumber: action.payload
			}]
		case 'CHANGE_USD_NUMBER':
			return [...[...state].split(getIndex('USD'), 1), {
				currencyName: 'USD',
				currencyNumber: action.payload
			}]

		case 'CHANGE_EUR_NUMBER':
			return [...[...state].split(getIndex('EUR'), 1), {
				currencyName: 'EUR',
				currencyNumber: action.payload
			}]
		case 'CHANGE_GBP_NUMBER':
			return [...[...state].split(getIndex('GBP'), 1), {
				currencyName: 'GBP',
				currencyNumber: action.payload
			}]
		case 'CHANGE_CHF_NUMBER':
			return [...[...state].split(getIndex('CHF'), 1), {
				currencyName: 'CHF',
				currencyNumber: action.payload
			}]
		default:
			return [...state]
	}
}
export default balanceReducer;