const express = require("express");
const router = express.Router();
const ReceivedUser = require("../models/receivedUsers");

// All Users Route
router.get("/", async (req, res) => {
  let searchOptions = {};
  if (req.query.name != null && req.query.name !== "") {
    searchOptions.name = new RegExp(req.query.name, "i");
  }
  try {
    const receivedUsers = await ReceivedUser.find(searchOptions);
    res.render("receivedUsers/index", {
      receivedUsers: receivedUsers,
      searchOptions: req.query,
    });
  } catch {
    res.redirect("/");
  }
});

// New User Route
router.get("/new", (req, res) => {
  res.render("receivedUsers/new", { receivedUser: new ReceivedUser() });
});

// Create User Route
router.post("/", async (req, res) => {
  const receivedUser = new ReceivedUser({
    name: req.body.name,
  });
  try {
    const newReceivedUser = await receivedUser.save();

    res.redirect(`receivedUsers`);
  } catch {
    res.render("receivedUsers/new", {
      receivedUser: receivedUser,
      errorMessage: "Error creating User",
    });
  }
});

module.exports = router;
