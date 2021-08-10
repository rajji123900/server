import express from 'express';
import Register from './register';
import Login from './login';
import Auth from './Auth';

const router = express.Router()

router.post('/register',Register)
router.get('/login',Login)
router.use(Auth)

export default router;
