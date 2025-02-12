const link = {
  href: "new",
  text: "New message",
};

const getIndex = (req, res, next) => {
  res.render("index", { messages: req.messages, title: "Mini MessageBoard", link: link });
  next();
};

module.exports = getIndex;
