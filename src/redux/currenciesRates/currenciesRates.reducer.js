let dolarRatio = 0;
let euroRatio = 0;
let poundRatio = 0;
let frankRatio = 0;


const INITIAL_STATE = {
	USD: dolarRatio,
	EUR: euroRatio,
	GBP: poundRatio,
	CHF: frankRatio,
}



const currenciesRates = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'GET_CURRENT_RATIO':
			return {
				...state,
				USD: action.payload.USD,
					EUR: action.payload.EUR,
					GBP: action.payload.GBP,
					CHF: action.payload.CHF,
			}
			default:
				return {
					...state
				}
	}
}

export default currenciesRates;