import app from './app'
import http from 'http'

const server = http.createServer(app)
const port = app.__env.NODE_PORT || 3000

server.listen(port, () => {
    console.log(`Server listening on ${app.__env.APP_URL}, Ctrl+C to stop`)
})
