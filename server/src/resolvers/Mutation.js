const { AuthenticationError } = require("apollo-server");
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
  createUser: async (_, { input }) => {
    try {
      const existingUser = await User.findOne({ email: input.email });
      if (existingUser) {
        throw new Error("User exists already.");
      }
      const hashedPassword = await bcrypt.hash(input.password, 12);

      const user = new User({
        username: input.username,
        email: input.email,
        image: input.image,
        role: input.role,
        password: hashedPassword,
      });

      const result = await user.save();
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
    const token = jwt.sign({ user }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
  addProduct: async (_, { input }, { userId }, context) => {
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
      if (!context.user || !context.user.role.includes("admin")) return null;
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
  deleteProduct: async (_, { id }, ctx) => {
    try {
      if (!ctx.user || !ctx.user.role.includes("admin")) return null;
      const product = await Product.findById({ _id: id });
      if (product) {
        await product.remove();
        throw "product Deleted successfully!";
      } else {
        throw "product not found with this Id!";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
    return true;
  },
  updateProduct: async (_, { id, input }, ctx) => {
    try {
      console.log(input);
      if (!ctx.user || !ctx.user.role.includes("admin")) return null;
      const product = await Product.findOne({ _id: id });
      if (product) {
        product = await Product.findOneAndUpdate({ _id: product._id }, input, {
          new: true,
        });
        return product;
      } else {
        throw "Product not found.";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
  addCategory: async (_, { input }, ctx) => {
    const { image, slug, category } = input;
    try {
      if (!ctx.user || !ctx.user.role.includes("admin")) return null;
      const newCategory = await new Category({ image, slug, category });
      return await newCategory.save();
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },

  deleteCategory: async (_, { id }, ctx) => {
    try {
      if (!ctx.user || !ctx.user.role.includes("admin")) return null;
      const category = await Category.findById({ _id: id });
      if (category) {
        await category.remove();
        throw "category Deleted successfully!";
      } else {
        throw "category not found with this Id!";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
  addReview: async (_, { input, id }, ctx) => {
    try {
      if (!ctx.user) return null;
      const product = await Product.findOne({ _id: id });
      if (product) {
        const review = {
          ...input,
          user: ctx.user._id,
        };
        product.review.push(review);
        const saveProduct = await product.save();
        return review;
      } else {
        throw "product not found with this Id!";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
};

module.exports = mutation;
