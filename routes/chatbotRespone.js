const express = require("express");
const router = express.Router();
const ChatbotRespone = require("../models/chatbotRespone");

// All ChatbotRespone Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.intent != null && req.query.intent !== "") {
    searchOptions.intent = new RegExp(req.query.intent, "i");
  }
  try {
    const chatbotRespones = await ChatbotRespone.find(searchOptions);
    res.render("chatbotRespones/index", {
      chatbotRespones: chatbotRespones,
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// New ChatbotRespone Route
router.get("/new", (req, res) => {
  res.render("chatbotRespones/new", { chatbotRespone: new ChatbotRespone() });
});

// Create ChatbotRespone Route
router.post("/", async (req, res) => {
  const chatbotRespone = new ChatbotRespone({
    intent: req.body.intent,
    content: {
      type: req.body.type,
      title: req.body.title,
      text: req.body.text,
    },
  });
  console.log(req.body);
  try {
    const newChatbotRespone = await chatbotRespone.save();

    res.redirect(`chatbotRespones`);
  } catch (e) {
    res.render("chatbotRespones/new", {
      chatbotRespone: chatbotRespone,
      errorMessage: "Error creating User",
    });
    console.log(e);
  }
});

// delete ChatbotRespone
router.delete("/:id", async (req, res) => {
  let chatbotRespone;
  try {
    chatbotRespone = await ChatbotRespone.findById(req.params.id);
    await chatbotRespone.deleteOne();
    res.redirect("/chatbotRespones");
  } catch {
    if (chatbotRespone == null) {
      res.redirect("/");
    } else {
      res.redirect(`/chatbotRespones/${chatbotRespone.id}`);
    }
  }
});

module.exports = router;
