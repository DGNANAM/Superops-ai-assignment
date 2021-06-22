/*
Configuration class to setup port and mongodb url for development purpose.
For production these values are setup through config variable of heroku.
*/

var env = process.env.NODE_ENV || "development";

if (env === "development") {
  process.env.PORT = 9090;
  process.env.MONGODB_URI =
    "mongodb+srv://Gnanam:Gnanam123@cluster0.al4hg.mongodb.net/MovieBookingApp";
} else if (env === "test") {
  process.env.PORT = 9090;
  process.env.MONGODB_URI =
    "mongodb+srv://Gnanam:Gnanam123@cluster0.al4hg.mongodb.net/MovieBookingAppTest";
}
