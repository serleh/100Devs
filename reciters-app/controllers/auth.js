const User = require("../models/User");
const bcrypt = require("bcrypt");
module.exports = {
  getRegister: (req, res) => {
    res.render("register.ejs");
  },
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 12);
      await User.create({ username, password: hash });
      console.log("user created");
      res.redirect("/reciters");
    } catch (err) {
      console.error(err);
    }
  },
  getLogin: (req, res) => {
    res.render("login.ejs");
  },
  login: async (req, res) => {
    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const validUser = await bcrypt.compare(password, user.password);

      if (validUser) {
        req.session.userId = user._id;
        return res.redirect("/reciters");
      }
      res.redirect("/login");
    } catch (err) {
      console.error(err);
    }
  },
  logout: (req, res) => {
    req.session.userId = null;
    res.redirect("/");
  },
};
