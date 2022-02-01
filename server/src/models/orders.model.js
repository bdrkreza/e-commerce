const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: { type: mongoose.Schema.ObjectId, ref: "User" },
  address: { type: String, required: true },
  city: { type: String, required: true },
  amount: { type: Number, required: true },
  pin: { type: Number, required: true },
  items: [
    {
      product:{ type: mongoose.Schema.ObjectId, ref: "Product" }
    }
  ],
});

const Order = mongoose.model("orders", orderSchema);

module.exports = Order;
