
/* these routers will just process to redirect to particular template file nothing else */

async function handlerRedirectHomePage(req,res){
    await res.render('home');
}
async function handlerRedirectSigninPage(req,res){
    await res.render('login');
}

async function handlerRedirectSignupPage(req,res){
    await res.render('register');
}

async function handlerRedirectAboutPage(req,res){
    await res.render('about');
}


module.exports = {
    handlerRedirectHomePage,
    handlerRedirectSignupPage,
    handlerRedirectSigninPage,
    handlerRedirectAboutPage
}