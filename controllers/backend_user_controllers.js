const BloggingUserModel = require('../models/user_blogging');
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
    const isMatched = await BloggingUserModel.matchPassword(email,password);
    console.log(isMatched);
    return res.redirect("/");
}



module.exports = {
    handlerSignupProcess,
    handlerSigninProcess
}