
/* these routers will just process to redirect to particular template file nothing else */

async function handlerRedirectHomePage(req,res){
    await res.render('home',{
        user:req.user,
    });
}
async function handlerRedirectSigninPage(req,res){
    await res.render('login',{
        user:req.user,
    });
}

async function handlerRedirectSignupPage(req,res){
    await res.render('register',{
        user:req.user,
    });
}

async function handlerRedirectAboutPage(req,res){
    await res.render('about',{
        user:req.user,
    });
}

async function handlerAddBlog(req,res){
    await res.render('add_blog',{
        user:req.user,
    });
}

async function handlerLogout(req,res){
    res.clearCookie("uid").redirect("/");
}

module.exports = {
    handlerRedirectHomePage,
    handlerRedirectSignupPage,
    handlerRedirectSigninPage,
    handlerRedirectAboutPage,
    handlerLogout,
    handlerAddBlog
}