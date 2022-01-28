const Product = require("../models/product.model");

const Category = {
  products: async (parent, { slug }) =>
    Product.find({ category: parent.category }),
};

module.exports = Category;
