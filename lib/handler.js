export default app => {
    // Error Handler
    app.use((error, req, res, next) => {
        if (error.code !== 'EBADCSRFTOKEN') return next(error)
        logger(error, LOGGER_TYPE.DANGER)
        next()
    })
}
