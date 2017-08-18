/* eslint no-undef: */

class Auth {
    static login(payload, callback) {
        let formData = {
            email: payload.email,
            password: payload.password
        }
        return axios.post('/login', formData)
            .then(response => callback(response.data))
            .catch(error => console.log(error))
    }
}

export default Auth
