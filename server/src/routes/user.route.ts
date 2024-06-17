// userRoutes.ts
import { Hono } from 'hono';
import { createUser} from '../controllers/user.controller'

const userRoutes = new Hono();


userRoutes.get('/', createUser);


export default userRoutes;
