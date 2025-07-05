const Reciters = require("../models/Reciter");

module.exports = {
  getReciters: async (req, res) => {
    const userId = req.session.userId;
    try {
      const recitersList = await Reciters.find({ user: userId }).sort({
        likes: -1,
      });
      res.render("reciters.ejs", { reciters: recitersList });
    } catch (err) {
      console.log(error);
    }
  },
  addReciters: async (req, res) => {
    const { reciterName, reciterLocation } = req.body;
    const userId = req.session.userId;
    try {
      await Reciters.create({
        reciterName,
        reciterLocation,
        likes: 0,
        user: userId,
      });
      console.log("Reciters added to database");
      res.redirect("/reciters");
    } catch (err) {
      console.log(err);
    }
  },
  addLikes: async (req, res) => {
    const { reciterName, reciterLocation } = req.body;
    try {
      await Reciters.findOneAndUpdate(
        { reciterName, reciterLocation },
        { $inc: { likes: 1 } }
      );
      console.log("Like updated");
      res.json("Like updated");
    } catch (err) {
      console.error(err);
    }
  },
  deleteReciter: async (req, res) => {
    try {
      await Reciters.findOneAndDelete({ _id: req.body.id });
      console.log("Deleted");
      res.json("Deleted");
    } catch (err) {
      console.error(err);
    }
  },
};
