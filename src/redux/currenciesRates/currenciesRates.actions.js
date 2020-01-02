export const getCurrenciesRatio = () => {

	return dispatch => {
		(async () => {
			const currencyRates = await fetch(
				'http://api.nbp.pl/api/exchangerates/tables/a/?format=json'
			);

			const readyRates = await currencyRates.json();
			const arrayOfRates = readyRates[0].rates;

			let dolarRatio = arrayOfRates.filter(
				currency => currency.code === 'USD'
			)[0].mid;

			let euroRatio = arrayOfRates.filter(
				currency => currency.code === 'EUR'
			)[0].mid;

			let poundRatio = arrayOfRates.filter(
				currency => currency.code === 'GBP'
			)[0].mid;

			let frankRatio = arrayOfRates.filter(
				currency => currency.code === 'CHF'
			)[0].mid;

			dispatch({
				type: 'GET_CURRENT_RATIO',
				payload: {
					USD: dolarRatio,
					EUR: euroRatio,
					GBP: poundRatio,
					CHF: frankRatio
				}
			});
		})();
	};
};