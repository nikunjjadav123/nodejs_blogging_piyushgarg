const { validateToken } = require("../services/authentication");

async function chckforAuthenticationCookie(req, res, next) {
    const tokenCookieValue = req.cookies["uid"];
    if(!tokenCookieValue){ return next(); }
    try{
        const userPayLoad = validateToken(tokenCookieValue);
        req.user = userPayLoad;
    }catch(error){}
    return next();
}


module.exports = {
    chckforAuthenticationCookie
}