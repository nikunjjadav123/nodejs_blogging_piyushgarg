const mongoose = require('mongoose');
const BloggingModel = require('../models/blog');

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

async function handlerAddBlogPage(req,res){
    await res.render('add_blog',{
        user:req.user,
    });
}

async function handlerLogout(req,res){
    res.clearCookie("uid").redirect("/");
}

async function handlerBlogDetailsPage(req,res){
    try{
        const blog = await BloggingModel.findOne({_id:req.params.blogId}).populate("createdBy");
        if(blog){
            return res.render('blog_details',{
                blog:blog,
                user:req.user,
            });
        }
    }catch(error){
        return res.render('blog_details',{error:"Blog Not Found"});
    }
}

module.exports = {
    handlerRedirectHomePage,
    handlerRedirectSignupPage,
    handlerRedirectSigninPage,
    handlerRedirectAboutPage,
    handlerLogout,
    handlerAddBlogPage,
    handlerBlogDetailsPage
}