const INITIAL_STATE = [{
		currencyName: 'PLN',
		currencyNumber: 1000,
	},
	{
		currencyName: 'USD',
		currencyNumber: 1000
	},
	{
		currencyName: 'EUR',
		currencyNumber: 1000
	},
	{
		currencyName: 'GBP',
		currencyNumber: 1000
	},
	{
		currencyName: 'CHF',
		currencyNumber: 1000
	}
]




const balanceReducer = (state = INITIAL_STATE, action) => {
	let temp;
	const getIndex = name => state.findIndex(item => item.currencyName === name);
	switch (action.type) {
		case 'CHANGE_PLN_NUMBER':
			temp = state[getIndex('PLN')].currencyNumber;
			state.splice(getIndex('PLN'), 1);
			return [...state, {
				currencyName: 'PLN',
				currencyNumber: Number(temp) + Number(Number(action.payload).toFixed(2))
			}]
		case 'CHANGE_USD_NUMBER':
			temp = state[getIndex('USD')].currencyNumber;
			state.splice(getIndex('USD'), 1);
			return [...state, {
				currencyName: 'USD',
				currencyNumber: Number(temp) + Number(Number(action.payload).toFixed(2))
			}]
		case 'CHANGE_EUR_NUMBER':
			temp = state[getIndex('EUR')].currencyNumber;
			state.splice(getIndex('EUR'), 1);
			return [...state, {
				currencyName: 'EUR',
				currencyNumber: Number(temp) + Number(Number(action.payload).toFixed(2))
			}]
		case 'CHANGE_GBP_NUMBER':
			temp = state[getIndex('GBP')].currencyNumber;
			state.splice(getIndex('GBP'), 1);
			return [...state, {
				currencyName: 'GBP',
				currencyNumber: Number(temp) + Number(Number(action.payload).toFixed(2))
			}]
		case 'CHANGE_CHF_NUMBER':
			temp = state[getIndex('CHF')].currencyNumber;
			state.splice(getIndex('CHF'), 1);
			return [...state, {
				currencyName: 'CHF',
				currencyNumber: Number(temp) + Number(Number(action.payload).toFixed(2))
			}]

		default:
			return [...state]
	}
}
export default balanceReducer;