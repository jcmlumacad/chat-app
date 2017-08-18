import Schema from '../Schemas/client-token.schema'

class ClientToken {
    static save(token, client) {
        let params = {
            client_id: client._id,
            token_id: token._id
        }

        let clientToken = new Schema(params)
        clientToken.save(error => {
            if (error) throw error
        })
        return clientToken
    }

    static findOne(query) {
        return Schema.findOne(query).exec((error, clientToken) => {
            if (error) throw error
            return clientToken
        })
    }
}

export default ClientToken
