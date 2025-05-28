const express = require('express');
const multer = require('multer');
const path = require('path');
const BloggingModel = require('../models/blog');
const {
    handlerSignupProcess,
    handlerSigninProcess
} = require('../controllers/backend_user_controllers')
const BackEndUserRouter = express.Router();

BackEndUserRouter.post("/user/signup",handlerSignupProcess);
BackEndUserRouter.post("/user/signin",handlerSigninProcess);

const upload = multer({
    storage: multer.diskStorage({
            destination: function (req, file, cb) {
            cb(null, path.join(`public/uploads/`))
        },
        filename: function (req, file, cb) {
            const fileName = `${Date.now()}-${file.originalname}`
            cb(null, fileName);
        }
    }),
    limits: { 
        fileSize: 5000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(png|jpg)$/)) { 
           return cb(new Error('Only JPG, PNG files are allowed'))
        }
       cb(undefined, true)
    }
});

const uploadBlogCoverMiddleware = upload.single("coverImage");


BackEndUserRouter.post("/user/add/blog",uploadBlogCoverMiddleware,async (req,res) =>{
        const {title,body} = req.body;
        const blog = await BloggingModel.create({
            "title": title,
            "body": body,
            "createdBy" : req.user._id,
            "coverImage": `/uploads/${req.file.filename}`
        });
        return res.redirect(`/user/blog/${blog._id}`);
});

module.exports = BackEndUserRouter;