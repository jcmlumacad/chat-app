export default app => {
    // Error Handler
    app.use((err, req, res, next) => {
        if (err.code !== 'EBADCSRFTOKEN') return next(err);
        console.log(err)
        next()
    })
}
