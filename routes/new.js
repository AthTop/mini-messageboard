const { Router } = require("express");
const { getNewForm, postForm } = require("../controllers/formController")
const newRouter = Router();

newRouter.get("/", getNewForm);
newRouter.post("/", postForm)

module.exports = newRouter;
