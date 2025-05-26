const express = require('express');
const {
    handlerSignupProcess,
    handlerSigninProcess
} = require('../controllers/backend_user_controllers')
const BackEndUserRouter = express.Router();

BackEndUserRouter.post("/user/api/signup",handlerSignupProcess);
BackEndUserRouter.post("/user/api/signin",handlerSigninProcess);

module.exports = BackEndUserRouter;