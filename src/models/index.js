const mongoose = require("mongoose");


const localMongoUrl = "mongodb://localhost:27017/gideon"
const mongoDbURI = process.env.MONGODB_URI || localMongoUrl;
mongoose.connect(mongoDbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.Promise = global.Promise;

const db =  mongoose.connection;

module.exports = db;
