const correctLogin = '';
const correctPassword = '';


export const signInTheUser = (login, password) => {
	if (login === correctLogin && password === correctPassword) {
		return {
			type: 'SIGN_IN_THE_USER',
			payload: true,
		}
	}
}