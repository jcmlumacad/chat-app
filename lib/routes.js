import Router from '~/vendor/router'
import AuthRoutes from '~/modules/Auth/Server/Routes/auth.routes'
import ClientRoutes from '~/modules/Client/Server/Routes/client.routes'
import ConversationRoutes from '~/modules/Conversation/Server/Routes/conversation.routes'
import WelcomeRoutes from '~/modules/Welcome/Server/Routes/welcome.routes'

export default app => {
    // Set app in router config
    Router.setApp(app)

    // Call your module routes here
    // e.g. UserRoutes(), AuthRoutes()
    app.get('/', (req, res) => {
        res.json(true)
    })

    AuthRoutes()
    ClientRoutes()
    ConversationRoutes()
    WelcomeRoutes()

    // Logout function
    app.get('/logout', (req, res) => {
        req.logout()
        res.redirect('/login')
    })

    // If the url doesn't exist, redirect to /
    app.all('/*', (req, res) => {
        res.redirect('/')
    })
}
