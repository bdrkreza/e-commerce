const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  product: [
    {
      id: { type: String, required: true },
      image: { type: String, required: true },
      itemTotal: { type: Number, required: true },
      name: { type: String, required: true },
      price: { type: String, required: true },
      quantity: { type: Number, required: true },
      title: { type: String, required: true },
    },
  ],
  quantity: { type: Number },
  price: { type: Number },
  shipment: {
    address: { type: String },
    state: { type: String },
    city: { type: String },
    pin: { type: String },
  },
  paymentId: { type: String },
  date: { type: Date, default: Date.now },
});

[
  {
    address: { type: String, required: true },
    state: { type: String, required: true },
    city: { type: String, required: true },
    pin: { type: String, required: true },
  },
];

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
  basket: [orderSchema],
});

const User = mongoose.model("users", UserSchema);

module.exports = User;
