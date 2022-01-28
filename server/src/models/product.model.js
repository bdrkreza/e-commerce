const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
  },
  
  rating: { type: Number, required: true },
  title: { type: String, required: true },
  comment: { type: String, trim: true, required: true },
  date: { type: Date, default: Date.now },
});

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  price: { type: String, required: true },
  rating: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  stock: { type: String, required: true },
  onSale: { type: Boolean },
  quantity: { type: String, required: true },
  category: { type: String, required: true },
  review: [commentSchema],
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
