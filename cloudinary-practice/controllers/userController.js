const User = require("../models/UserModel");
const cloudinary = require("../config/cloudinary");
const fs = require("fs");

exports.createUser = async (req, res) => {
  try {
    const result = await cloudinary.uploader.upload(req.file.path);
    const user = await User.create({
      name: req.body.name,
      address: req.body.address,
      image: result.secure_url,
    });
    fs.unlinkSync(req.file.path);
    res.redirect("/users");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

exports.getUsers = async (req, res) => {
  const users = await User.find();
  res.render("form", { users });
};
