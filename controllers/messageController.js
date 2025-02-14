const db = require("../db/queries");

const getMessageController = async (req, res) => {
  const messageId = req.params.id;
  try {
    const results = await db.getMessageById(messageId);
    if (results.length > 0) {
      const message = results[0];
      res.render("message", {
        message: message,
        title: `Message ${message.id}`,
      });
    } else {
      res.render("404", { errorcode: "404 message not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).render("404", { errorcode: "500 internal server error" });
  }
};

module.exports = getMessageController;
