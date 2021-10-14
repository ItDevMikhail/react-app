import Router from 'express';
import userRouter from './userRouter.js';
import ErrorHandingMiddleware from '../middlewares/ErrorHandingMiddleware.js';

const router = new Router();

router.use('/user', userRouter, ErrorHandingMiddleware)

export default router;