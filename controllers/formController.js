const getNewForm = (req, res, next) => {
  res.render("form", { title: "Mini Messageboard" });
  next();
};

const postForm = (req, res, next) => {
  req.messages.push({
    text: req.body.text,
    user: req.body.user,
    added: new Date(),
  });
  res.redirect("/");
};

module.exports = { getNewForm, postForm };
