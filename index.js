const dotenv = require("dotenv");
const path = require('path');
const express = require("express");
var cookieParser = require('cookie-parser');
const FrontEndUserRouter = require("./routes/frontend_user_routes");
const BackEndUserRouter = require("./routes/backend_user_routes");
const Blog = require("./models/blog");

const {connectMongoDB} = require("./connection");
const { chckforAuthenticationCookie } = require("./middleware/authentication");
const app = express();
dotenv.config();
connectMongoDB(process.env.MONGOOSE_URL);
app.set("view engine","ejs");
app.set('/views', path.join(__dirname, './views'));
app.use('/public', express.static('./public'));

app.use('/bootstrap_css',express.static(path.join(__dirname,'node_modules','bootstrap','dist','css')));
app.use('/bootstrap_js',express.static(path.join(__dirname,'node_modules','bootstrap','dist','js')));
app.use('/bootstrap_icons',express.static(path.join(__dirname,'node_modules','bootstrap-icons','font')));

app.use(express.urlencoded({extended:false}));
app.use(cookieParser());

app.use(chckforAuthenticationCookie);

app.get('/',async(req,res) => {
    const allBlogs = await Blog.find({}).sort('createdAt');
    res.render('home',{
        user:req.user,
        blogs:allBlogs,
    })
});
app.use("/",FrontEndUserRouter);
app.use("/",BackEndUserRouter);

app.listen(process.env.PORT,() => console.log(`Server Started at PORT:${process.env.PORT}`));