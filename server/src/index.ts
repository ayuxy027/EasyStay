import { Hono } from 'hono'
import userRoutes from './routes/user.route'

const app = new Hono()



app.route('/users',userRoutes)

export default app
