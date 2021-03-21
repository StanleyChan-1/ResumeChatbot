const mongoose = require("mongoose");

const receivedUsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("ReceivedUsers", receivedUsersSchema);
