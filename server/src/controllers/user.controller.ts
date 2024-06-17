// userController.ts
import { Context } from 'hono';

export const createUser = (c: Context) => {
  
  return c.json({ message: 'Get all users' });
};


export const signup = (c:Context)=>
    {
        
        
    }