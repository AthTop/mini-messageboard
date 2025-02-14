const express = require("express");
const app = express();
const path = require("node:path");
require("dotenv").config();

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

const indexRouter = require("./routes/index");
const newRouter = require("./routes/new");
const messageRouter = require("./routes/message");

app.use(express.urlencoded({ extended: true }));

app.use("/new", newRouter);
app.use("/message", messageRouter);
app.use("/", indexRouter);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Mini message board server running express on port ${PORT}`);
});
