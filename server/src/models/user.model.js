const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  image: { type: String, default: "" },
  password: { type: String, required: true },
  role: {
    type: String,
    default: "user",
    enum: ["admin", "merchant", "user"],
  },
  basket: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "product",
      },
      address: { type: String },
      state: { type: String },
      city: { type: String },
      amount: { type: String },
      pin: { type: Number },
      quantity: { type: Number },
      payToken: { type: String },
      date: { type: Date, default: Date.now },
    },
  ],
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
