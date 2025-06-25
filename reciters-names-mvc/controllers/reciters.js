const Reciters = require("../models/Reciters");
module.exports = {
  getReciters: async (req, res) => {
    try {
      const recitersList = await Reciters.find().sort({ likes: -1 });
      res.render("index.ejs", { reciters: recitersList });
    } catch (err) {
      console.error(err);
    }
  },
  createReciters: async (req, res) => {
    try {
      await Reciters.create({
        reciterName: req.body.reciterName,
        reciterLocation: req.body.reciterLocation,
        likes: 0,
      });
      console.log("Reciter added to database");
      res.redirect("/");
    } catch (err) {
      console.error(err);
    }
  },
  addLike: async (req, res) => {
    try {
      await Reciters.findOneAndUpdate(
        {
          reciterName: req.body.reciterName,
          reciterLocation: req.body.reciterLocation,
        },
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
