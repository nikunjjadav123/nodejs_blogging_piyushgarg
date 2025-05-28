const BloggingUserModel = require('../models/user_blogging');
const BloggingModel = require('../models/blog');
const mongoose = require('mongoose');

async function handlerSignupProcess(req,res){
    const {fullName,email,password} = req.body;
    await BloggingUserModel.create({
        fullName,
        email,
        password
    });
    return res.redirect("/");
}

async function handlerSigninProcess(req,res){
    const {email,password} = req.body;
    try{
        const token = await BloggingUserModel.matchPasswordAndGenerateToken(email,password);
        return res.cookie("uid",token).redirect("/");
    }catch(error){
        return res.render('login',{
            error:'Incorrect Email or Password.',
        });
    }
    
}


module.exports = {
    handlerSignupProcess,
    handlerSigninProcess
}