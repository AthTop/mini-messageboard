const { Router } = require("express");
const getMessageController = require("../controllers/messageController");
const messageRouter = Router();

messageRouter.get("/:id", getMessageController);

module.exports = messageRouter;
