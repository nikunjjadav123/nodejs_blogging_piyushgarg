const mongoose = require('mongoose');
const {createHmac, randomBytes} = require('crypto');
const { render } = require('ejs');
const { createTokenForUser } = require('../services/authentication');

const BloggingUserSchema = new mongoose.Schema({
    "fullName": {
        type: String,
        required:true
    },
    "email":{
        type: String,
        required:true,
        unique:true
    },
    "salt": {
        type: String
    },
    "password": {
        type: String,
        required: true,
    },
    "profileImageURL":{
        type: String,
        default: '/images/avatar.jpg',
    },
    "role":{
        type: String,
        enum: ['USER','ADMIN'],
        default: 'USER'
    }
},{timestamps:true});

BloggingUserSchema.pre("save",function(next){
    const user = this;
    const salt = randomBytes(16).toString();
    const hashedPassword = createHmac("sha256",salt).update(user.password).digest('hex');

    this.salt = salt;
    this.password = hashedPassword;

    next();
});

BloggingUserSchema.static('matchPasswordAndGenerateToken',async function(email,password){
    const user = await this.findOne({email});
    if(!user) throw new Error('User Not Found.');
    const salt = user.salt;
    const hashedPassword = user.password;
    const userProvidedHash = createHmac("sha256",salt).update(password).digest('hex');
    if(hashedPassword !== userProvidedHash) throw new Error('Invalid Password.');

    const token = createTokenForUser(user);
    return token;
    //return {...user,password:undefined,salt:undefined}
});

const BloggingUser = mongoose.model("user_blogging",BloggingUserSchema);

module.exports = BloggingUser;