import Client from '~/modules/Client/Server/Entities/client.entity'
import Token from '~/modules/Client/Server/Entities/token.entity'
import ClientToken from '~/modules/Client/Server/Entities/client-token.entity'

module.exports = method => {
    let methods = {
        generate
    }

    return methods[method]
}

function generate(req, res) {
    if (req.route.methods.get) {
        let query = {
            ip_address: req.query.ip,
            user_agent: req.query.agent
        }
        Token.findOne(query).then(token => {
            if (!token) {
                let data = Token.save(query)
                let client = Client.save(data)
                ClientToken.save(data, client)
                res.json(data)
            }

            res.json(token)
        })
    }
}
