/* global axios */

class Auth {
    static login(payload) {
        let formData = {
            email: payload.email,
            password: payload.password
        }
        return axios.post('/login', formData)
            .then(response => response.data)
    }

    static isLoggedIn() {
        return axios.get('/isLoggedIn')
            .then(response => response.data)
    }

    static me() {
        return axios.get('/api/me')
            .then(response => response.data)
    }
}

export default Auth
