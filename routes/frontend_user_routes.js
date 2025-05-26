const express = require('express');
const {
    handlerRedirectHomePage,
    handlerRedirectSignupPage,
    handlerRedirectSigninPage,
    handlerRedirectAboutPage
} = require('../controllers/frontend_user_controllers');
const FrontEndUserRouter = express.Router();

/* these routers will just a simple routers to redirect to particular template file nothing else */
FrontEndUserRouter.get("/",handlerRedirectHomePage);
FrontEndUserRouter.get("/user/signup",handlerRedirectSignupPage);
FrontEndUserRouter.get("/user/signin",handlerRedirectSigninPage);
FrontEndUserRouter.get("/user/about",handlerRedirectAboutPage);

module.exports = FrontEndUserRouter;