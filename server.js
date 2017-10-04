/* global env, logger, LOGGER_TYPE */

import app from './app'
import http from 'http'
import socketIo from 'socket.io'
import sockets from './lib/sockets'

const server = http.createServer(app)
const port = env.NODE_PORT || 5000
const defaultPort = 8000
const defaultIpAddress = '127.0.0.1'

// If the development is for testing purpose or development. Use 'local'
if (env.APP_ENV === 'local') {
    env.APP_URL = `${env.APP_URL}:${port}`
}

// Socket configuration
const io = socketIo(server)
sockets(io)

if (env.APP_ENV === 'production') {
    app.listen(port, () => {
        logger(`Server listening on ${env.APP_URL} at port ${port}, Ctrl+C to stop`, LOGGER_TYPE.INFO)
    })
} else {
    server.listen(defaultPort, defaultIpAddress, () => {
        server.close(() => {
            server.listen(port, env.HOSTNAME, () => {
                logger(`Server listening on ${env.APP_URL}, Ctrl+C to stop`, LOGGER_TYPE.INFO)
            })
        })
    })
}
