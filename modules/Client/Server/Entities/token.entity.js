import Schema from '../Schemas/token.schema'

class Token {
    static findOne(query) {
        return Schema.findOne(query).exec((err, token) => {
            if (err) throw err
            return token
        })
    }

    static save(query) {
        let now = new Date
        let temp = {
            value: now.toString(),
            ip_address: query.ip_address,
            user_agent: query.user_agent,
            expired_at: now.setDate(now.getDate() + 1)
        }

        let newToken = new Schema(temp)
        newToken.save(error => {
            if (error) throw error
        })
        return newToken
    }
}

export default Token
