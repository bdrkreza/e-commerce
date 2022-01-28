const books = require("../database/data");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");

const Query = {
  user: async () => await User.find({}),
  products: async () => await Product.find({}),
  product: async (_, { id }) => await Product.find({ _id: id }),
  categories: async () => await Category.find({}),
  category: async (_, { id }) => await Category.findById({ _id: id }),
};

module.exports = Query;
