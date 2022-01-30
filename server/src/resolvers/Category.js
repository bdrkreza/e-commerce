const Product = require("../models/product.model");

const Category = {
  products: async (parent) =>
    Product.find({ category: parent.category }),
};

module.exports = Category;
