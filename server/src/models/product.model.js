const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  name: { type: String, required: true },
  title: { type: String, required: true },
  image: { type: String, required: true },
  rating: { type: String, required: true },
  price: { type: String, required: true },
  description: { type: String, required: true },
  slug: { type: String, required: true },
  stock: { type: String, required: true },
  onSale: { type: Boolean },
  quantity:{type:String,required:true},
  category: { type: String, required: true },
});

const Product = mongoose.model("product", ProductSchema);

module.exports = Product;
