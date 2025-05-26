const mongoose = require('mongoose');

async function connectMongoDB(url){
    return mongoose.connect(url).then(
        ()=> console.log("MongooDB Connected")
    ).catch((err) => console.log("Error:",err));
}

module.exports = {
    connectMongoDB
};