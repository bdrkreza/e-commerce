const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const Category = require("../models/category.model");
const Product = require("../models/product.model");
const User = require("../models/user.model");

mutation = {
  /**
   * Register a new user
   * @route POST /api/auth/register
   * @access Public
   */
  createUser: async (_, { newUser }) => {
    try {
      const existingUser = await User.findOne({ email: newUser.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(newUser.password, 12);

      const user = new User({
        username: newUser.username,
        email: newUser.email,
        image: newUser.image,
        role: newUser.role,
        password: hashedPassword,
      });

      const result = await user.save();
      console.log(result._doc);

      return { ...result._doc, password: null, _id: result.id };
    } catch (err) {
      throw err;
    }
  },
  /**
   * login a new user
   * @route POST /api/auth/login
   * @access private
   */
  login: async (_, { email, password }) => {
    const user = await User.findOne({ email: email });
    if (!user) {
      throw new Error("User does not exist!");
    }
    const isEqual = await bcrypt.compare(password, user.password);
    if (!isEqual) {
      throw new Error("Password is incorrect!");
    }
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      "somesupersecretkey",
      {
        expiresIn: "1h",
      }
    );
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
  addProduct: async (_, { input }) => {
    const {
      name,
      title,
      image,
      price,
      rating,
      description,
      onSale,
      slug,
      quantity,
      category,
      stock,
    } = input;

    try {
      const newProduct = Product({
        name,
        title,
        image,
        price,
        rating,
        description,
        onSale,
        slug,
        quantity,
        category,
        stock,
      });
      return await newProduct.save();
    } catch (error) {
      throw error;
    }
  },
  addCategory: async (_, { input }) => {
    const { image, slug, category } = input;
    try {
      const newCategory = await new Category({ image, slug, category });
      return await newCategory.save();
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mutation;
