const express = require("express");
const router = express.Router();
const ChatbotDoucment = require("../models/chatbotDocument");
const imageMimeTypes = ["image/jpeg", "image/png", "images/gif"];

// All ChatbotDocuments Route
router.get("/", async (req, res) => {
  let query = ChatbotDoucment.find();
  if (req.query.title != null && req.query.title != "") {
    query = query.regex("title", new RegExp(req.query.title, "i"));
  }

  try {
    const chatbotDocuments = await query.exec();
    res.render("chatbotDocuments/index", {
      chatbotDocuments: chatbotDocuments,
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// New ChatbotDocuments Route
router.get("/new", async (req, res) => {
  renderNewPage(res, new ChatbotDoucment());
});

// Create ChatbotDocuments Route
router.post("/", async (req, res) => {
  const chatbotDocument = new ChatbotDoucment({
    title: req.body.title,
    description: req.body.description,
  });
  saveCover(chatbotDocument, req.body.cover);

  try {
    const newChatbotDocument = await chatbotDocument.save();

    // res.redirect(`chatbotDocuments/${newChatbotDocument.id}`);
    res.redirect(`chatbotDocuments/`);
  } catch {
    renderNewPage(res, chatbotDocument, true);
  }
});

router.delete("/:id", async (req, res) => {
  let chatbotDocument;
  try {
    chatbotDocument = await ChatbotDocument.findById(req.params.id);
    await chatbotDocument.remove();
    res.redirect("/chatbotDocuments");
  } catch {
    if (chatbotDocument != null) {
      res.redirect("/chatbotDocuments");
    } else {
      res.redirect(`/`);
    }
  }
});

function renderNewPage(res, chatbotDocument, hasError = false) {
  try {
    const params = {
      chatbotDocument: chatbotDocument,
    };
    if (hasError) params.errorMessage = "Error Creating Book";
    res.render("chatbotDocuments/new", params);
  } catch {
    res.redirect("/chatbotDocuments");
  }
}

function saveCover(chatbotDocument, coverEncoded) {
  if (coverEncoded == null) return;
  const cover = JSON.parse(coverEncoded);
  if (cover != null && imageMimeTypes.includes(cover.type)) {
    chatbotDocument.coverImage = new Buffer.from(cover.data, "base64");
    chatbotDocument.coverImageType = cover.type;
  }
}

module.exports = router;
