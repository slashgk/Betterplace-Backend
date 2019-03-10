var mongoose = require('mongoose');
if(!process.env.MONGODB_URI)
    process.env.MONGODB_URI = "mongodb://localhost:27017/Channel";

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {mongoose};
