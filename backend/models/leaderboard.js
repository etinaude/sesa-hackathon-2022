const { model, Schema } = require("mongoose");

const leaderboardSchema = new Schema({
  name: String,
  image: String,
  time: String,
});

module.exports = model("Leaderboard", leaderboardSchema);