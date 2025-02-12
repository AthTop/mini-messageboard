const getMessageController = (req, res, next) => {
  const messageId = req.params.id;
  if (messageId >= 0 && messageId < req.messages.length) {
    res.render("message", {
      message: req.messages[messageId],
      title: `Message ${messageId}`,
    });
  } else {
    res.render("404");
  }
  next();
};

module.exports = getMessageController;
