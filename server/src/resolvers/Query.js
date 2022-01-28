const books = require("../database/data");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");

const Query = {
  user: async () => await User.find({}),
  products: async () => await Product.find({}),
  categories: async () => await Category.find({}),
};

module.exports = Query;
