module.exports = {
  isLoggedIn: (req, res, next) => {
    if (!req.session.userId) {
      return res.redirect("/login");
    }
    next();
  },
};
