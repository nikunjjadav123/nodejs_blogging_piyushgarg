const express = require('express');
const {
    handlerRedirectHomePage,
    handlerRedirectSignupPage,
    handlerRedirectSigninPage,
    handlerRedirectAboutPage,
    handlerLogout,
    handlerAddBlog
} = require('../controllers/frontend_user_controllers');
const FrontEndUserRouter = express.Router();

/* these routers will just a simple routers to redirect to particular template file nothing else */
FrontEndUserRouter.get("/",handlerRedirectHomePage);
FrontEndUserRouter.get("/user/signup",handlerRedirectSignupPage);
FrontEndUserRouter.get("/user/signin",handlerRedirectSigninPage);
FrontEndUserRouter.get("/user/about",handlerRedirectAboutPage);
FrontEndUserRouter.get("/user/logout",handlerLogout);
FrontEndUserRouter.get("/user/add/blog",handlerAddBlog);

module.exports = FrontEndUserRouter;