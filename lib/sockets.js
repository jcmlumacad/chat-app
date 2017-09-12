import socketIo from 'socket.io'
import http from 'http'

export default app => {
    let server = http.createServer(app)
    let io = socketIo(server)

    io.on('connection', socket => {
        logger('Socket connection started')

        socket.on('newMessage', payload => {
            logger(payload)
        })
    })
}
