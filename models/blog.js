const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({
    'title':{
        type:String,
        required:true
    },
    'body':{
        type:String,
        required:true
    },
    'coverImage':{
        type:String,
        required:false
    },
    'createdBy':{
        type: mongoose.Schema.Types.ObjectId,
        ref:"user_blogging"
    }
},{timeseries:true});

const Blog = mongoose.model('blog',blogSchema);

module.exports = Blog;