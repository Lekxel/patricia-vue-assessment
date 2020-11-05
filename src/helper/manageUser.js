export const saveUser = (data) => {
	localStorage.setItem('user', JSON.stringify(data))
}
export const getUser = () => {
	const user = localStorage.getItem('user')
	return user ? JSON.parse(user) : false
}

export const logUser = ({ username, password }) => {
	const user = getUser()
	if (user) {
		if ((username === user.username) && (password === user.password)) {
			return true
		}
		else {
			return "Invalid login credentials"
		}
	}
	return "User does not exist"
}

export const setLogged = () => {
	localStorage.setItem('userLogged', 'true')
}

export const isLogged = () => {
	const logged = localStorage.getItem('userLogged')
	if (logged === 'true') {
		return true
	}
	return false
}

export const logout = () => {
	localStorage.setItem('userLogged', 'false')
}

