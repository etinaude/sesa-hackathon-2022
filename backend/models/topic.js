const { model, Schema } = require("mongoose");

const topicMessageSchema = new Schema({
  name: String,
  content: String,
  likes: Number,
  isLiked: Boolean,
  replies: [String],
  replyTo: String, //id
  createdAt: String,
});

module.exports = model("TopicMessage", topicMessageSchema);
