import express from 'express'
import morgan from 'morgan'
import userRoutes from './routes/user.routes.js'

const app = express() 

app.use(morgan('dev'))

app.get('/', (req, res) => {
    res.json({puta:"si"})
})

app.use('/api/users', userRoutes)

export default app;