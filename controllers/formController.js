const db = require("../db/queries");

const getNewForm = (req, res) => {
  res.render("form", { title: "Mini Messageboard" });
};

const postForm = async (req, res) => {
  try {
    const { user, text } = req.body;
    await db.postMessage(user, text);
    res.redirect("/");
  } catch (err) {
    console.error(err);
    res.status(500).render("404", { errorcode: "500 internal server error" });
  }
};

module.exports = { getNewForm, postForm };
