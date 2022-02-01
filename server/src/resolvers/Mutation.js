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
      expiresIn: "1d",
    });
    return { userId: user.id, token: token, tokenExpiration: 1 };
  },
  /**
   * add new product route
   * @route POST
   * @access private admin
   */
  addProduct: async (_, { input }, { user }) => {
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
      if (!user || !user.role.includes("admin"))
        throw new AuthenticationError("not admin");
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
  /**
   * product delete route
   * @route POST
   * @access private admin
   */
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
  /**
   * product update route
   * @route POST
   * @access private admin
   */
  updateProduct: async (_, { id, input }, { user }) => {
    try {
      if (!user || !user.role.includes("admin")) return null;
      const product = await Product.findOne({ _id: id });
      if (product) {
        const updateProduct = await Product.findOneAndUpdate(
          { _id: product._id },
          input,
          {
            new: true,
          }
        );
        return updateProduct;
      } else {
        throw "Product not found.";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
  /**
   * add a new product category
   * @route POST
   * @access private admin
   */
  addCategory: async (_, { input }, { user }) => {
    const { image, slug, category } = input;
    try {
      if (!user || !user.role.includes("admin")) return null;
      const newCategory = await new Category({ image, slug, category });
      return await newCategory.save();
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
  /**
   * delete Product route
   * @route POST
   * @access private admin
   */

  deleteCategory: async (_, { id }, { user }) => {
    try {
      if (!user || !user.role.includes("admin")) return null;
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
  /**
   * add a product Review
   * @route POST
   * @access private
   */
  addReview: async (_, { input, id }, { user }) => {
    try {
      if (!user) return null;
      const product = await Product.findOne({ _id: id });
      if (product) {
        const review = {
          ...input,
          user: user._id,
        };
        product.review.push(review);
        await product.save();
        return review;
      } else {
        throw "product not found with this Id!";
      }
    } catch (error) {
      throw new AuthenticationError(error);
    }
  },
  addToBasket: async (_, { id, input }, { user }) => {
    try {
      console.log(input);
      if (!user) return null;
      const orderUser = await User.findById({ _id: user._id });
      if (orderUser) {
        const OrderItem = {
          ...input,
        };
        orderUser.basket.push(OrderItem);
        await orderUser.save();
        return orderUser;
      } else {
        throw "product not found with this Id!";
      }
    } catch (error) {
      throw error;
    }
  },
};

module.exports = mutation;
