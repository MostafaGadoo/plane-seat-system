const { Router } = require('express');

const authController = require('../controller/auth');

const authRouter = Router();

authRouter.post('/signin', authController.postLogin);

authRouter.post('/signup', authController.Signup);

module.exports = authRouter;