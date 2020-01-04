export const changeFirstSelect = value => ({
	type: 'CHANGE_FIRST_SELECT',
	payload: value
})

export const changeSecondSelect = value => ({
	type: 'CHANGE_SECOND_SELECT',
	payload: value
})

export const changeHowMuchBuy = value => ({
	type: 'CHANGE_HOW_MUCH_BUY_SELECT',
	payload: value
})

export const changeHowMuchSell = value => ({
	type: 'CHANGE_HOW_MUCH_SELL_SELECT',
	payload: value
})

export const clearAllChangeCurrency = () => ({
	type: 'CLEAR_ALL_CHANGE_CURRENCY'
})