const db = require("../db/queries");

const link = {
  href: "new",
  text: "New message",
};

const getIndex = async (req, res) => {
  try {
    const messages = await db.getMessages();
    res.render("index", {
      messages: messages,
      title: "Mini MessageBoard",
      link: link,
    });
  } catch (err) {
    console.error(err);
    res.status(500).render("404", { errorcode: "500 internal server error" });
  }
};

module.exports = getIndex;
