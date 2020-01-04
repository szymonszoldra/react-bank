export const changePLNNumber = number => {
	return {
		type: 'CHANGE_PLN_NUMBER',
		payload: Number(number),
	}
}

export const changeUSDNumber = (number) => {
	return {
		type: 'CHANGE_USD_NUMBER',
		payload: Number(number),
	}
}

export const changeEURNumber = (number) => {
	return {
		type: 'CHANGE_EUR_NUMBER',
		payload: Number(number),
	}
}

export const changeGBPNumber = (number) => {
	return {
		type: 'CHANGE_GBP_NUMBER',
		payload: Number(number),
	}
}
export const changeCHFNumber = (number) => {
	return {
		type: 'CHANGE_CHF_NUMBER',
		payload: Number(number),
	}
}