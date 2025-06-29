const session = require("express-session");

module.exports = session({
  secret: "mylittlesecret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
  },
});
