export const changePLNNumber = (state, number) => {
	return {
		type: 'CHANGE_PLN_NUMBER',
		payload: number,
	}
}