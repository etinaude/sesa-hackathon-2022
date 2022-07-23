const { model, Schema } = require("mongoose");

const messageSchema = new Schema({
  id: String,
  name: String,
  content: String,
  likes: Number,
  replies: [String],
  replyTo: String, //id
  createdAt: String,
});

module.exports = model("Message", messageSchema);
