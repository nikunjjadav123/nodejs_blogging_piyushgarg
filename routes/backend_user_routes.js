const express = require('express');
const {
    handlerSignupProcess,
    handlerSigninProcess
} = require('../controllers/backend_user_controllers')
const BackEndUserRouter = express.Router();

BackEndUserRouter.post("/user/signup",handlerSignupProcess);
BackEndUserRouter.post("/user/signin",handlerSigninProcess);

module.exports = BackEndUserRouter;