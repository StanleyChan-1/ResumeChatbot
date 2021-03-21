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
  receivetime: {
    type: String,
  },
});

module.exports = mongoose.model("ReceivedUsers", receivedUsersSchema);
