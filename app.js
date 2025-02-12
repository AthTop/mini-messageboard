const express = require("express");
const app = express();
const path = require("node:path");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const messageRouter = require("./routes/message");

const messages = [
  {
    text: "Hi there",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello world",
    user: "Charles",
    added: new Date(),
  },
];
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  req.messages = messages;
  next();
});

app.use("/new", newRouter);
app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Mini message board server running express on port ${PORT}`);
});
