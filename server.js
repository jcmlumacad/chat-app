import app from './app'
import http from 'http'

const server = http.createServer(app)
const port = env.NODE_PORT || 3000

server.listen(port, () => {
    logger(`Server listening on ${env.APP_URL}, Ctrl+C to stop`, LOGGER_TYPE.INFO)
})
