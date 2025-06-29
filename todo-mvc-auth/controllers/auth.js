const User = require("../models/Users");
const bcrypt = require("bcrypt");

module.exports = {
  getRegisterPage: (req, res) => {
    res.render("register.ejs");
  },
  register: async (req, res) => {
    const { username, password } = req.body;
    try {
      const hash = await bcrypt.hash(password, 12);
      await User.create({ username, password: hash });
      console.log("User created");
      res.redirect("/todos");
    } catch (err) {
      console.error(err);
    }
  },
  getLogin: (req, res) => {
    res.render("login.ejs");
  },
  login: async (req, res) => {
    console.log("Request Body:", req.body);

    try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });
      const validPassword = await bcrypt.compare(password, user.password);

      if (validPassword) {
        req.session.user_id = user._id;
        return res.redirect("/todos");
      }
      res.redirect("/login");
    } catch (err) {
      console.error(err);
    }
  },
  logout: (req, res) => {
    req.session.user_id = null;
    res.redirect("/login");
  },
};
