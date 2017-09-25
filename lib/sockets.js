/* global logger */

export default io => {
    io.on('connection', socket => {
        logger('Socket connection started')
        logger(socket.id)

        socket.on('newMessage', payload => {
            logger('Fire: NEW MESSAGE EVENT')
            logger(payload)
            socket.broadcast.to(payload._conversation).emit('newMessage', payload)
            socket.broadcast.emit('updateConversation', payload)
        })

        socket.on('joinRoom', payload => {
            logger('Fire: JOIN ROOM EVENT')
            logger(payload)
            socket.join(payload.conversation.id)
        })

        socket.on('leaveRoom', payload => {
            logger('Fire: LEAVE ROOM EVENT')
            logger(payload)
            socket.leave(payload.id)
        })

        socket.on('createdConversation', payload => {
            logger('Fire: CREATED CONVERSATION EVENT')
            logger(payload)
            socket.join(payload.data.id)
            io.emit('createdConversation', payload)
        })

        socket.on('markAsRead', payload => {
            logger('Fire: MARK AS READ EVENT')
            logger(payload)
            socket.broadcast.to(payload.conversation_id).emit('markAsRead', payload)
        })
    })
}
