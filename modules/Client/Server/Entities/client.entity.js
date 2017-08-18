import Schema from '../Schemas/client.schema'

class Client {
    static save() {
        let params = {
            name: 'Test Client'
        }

        let client = new Schema(params)
        client.save(error => {
            if (error) throw error
        })
        return client
    }
}

export default Client
