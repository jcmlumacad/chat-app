import Schema from '../Schemas/user.schema'

class User {
    static save(params) {
        let user = new Schema(params)
        user.save(error => {
            if (error) throw error
        })
        return user
    }
}

export default User
