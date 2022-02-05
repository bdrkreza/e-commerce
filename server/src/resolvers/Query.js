const books = require("../database/data");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");

const Query = {
  user: async () => await User.find({}),
  getUser: async (_, {}, ctx) => {
    if (!ctx.user) return null;
    const user = await User.findById({ _id: ctx.user._id })
    .populate({
      path: "basket", // populate basket
      populate: {
        path: "product", // in basket, populate products
      },
    })
    .exec();
    return user;
  },
  products: async () => await Product.find({}),
  product: async (_, { id }) => await Product.findById({ _id: id }),
  categories: async () => await Category.find({}),
  category: async (_, { id }) => await Category.findById({ _id: id }),
  getBasket: async (_, {}, { user }) => {
    if (!user) return null;
    const userBasket = await User.findById(user.id, { basket: 1 })
      .populate({
        path: "basket", // populate basket
        populate: {
          path: "product", // in basket, populate products
        },
      })
      .exec();
    return userBasket.basket;
  },
};

module.exports = Query;
