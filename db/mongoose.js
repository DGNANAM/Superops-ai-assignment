/*
Setup database connection mongoose library.
*/

var mongoose = require("mongoose");

const InitiateMongoServer = async () => {
  mongoose.Promise = global.Promise;
  mongoose.set("useCreateIndex", true);
  mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = InitiateMongoServer;
