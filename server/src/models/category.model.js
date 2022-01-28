const mongoose = require("mongoose");

const CategorySchema = mongoose.Schema({
  image: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
});

const Category = mongoose.model("category", CategorySchema);

module.exports = Category;
