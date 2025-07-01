const session = require("express-session");
const MongoStore = require("connect-mongo");

module.exports = session({
  secret: "itisiasecret",
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({
    mongoUrl: process.env.DB_STRING,
  }),
  cookie: {
    maxAge: 1000 * 60 * 60 * 24,
    httpOnly: true,
    secure: false,
  },
});
