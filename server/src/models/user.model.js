const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: "image" },
  password: { type: String, required: true },
  role: { type: String, default: "user", enum: ["admin", "user"] },
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
