const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    user: [User]
    categories: [Category!]
    products: [Product!]!
    product(id: ID): Product
    category(id: ID!): Category
  }
  type Mutation {
    createUser(input: UserInput!): User
    login(email: String, password: String): Tokens
    addProduct(input: addProductInput): Product
    deleteProduct(id: ID!): Boolean
    updateProduct(id: ID!, input: addProductInput): Product
    addCategory(input: addCategoryInput): Category
    deleteCategory(id: ID!): Boolean
    updateCategory(id: ID!, input: addCategoryInput): Category
    addReview(id: ID!, input: AddReviewInput): Review
    deleteReview(id: ID): Boolean
    updateReview(id: ID!, input: AddReviewInput): Review
  }

  type User {
    _id: ID
    username: String!
    image: String!
    email: String!
    password: String!
    role: String!
  }

  input UserInput {
    username: String!
    image: String
    email: String!
    password: String!
    role: String
  }

  type Tokens {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Product {
    _id: String!
    name: String!
    title: String!
    image: String!
    price: String!
    rating: String!
    quantity: Int!
    description: String!
    slug: String!
    stock: String!
    onSale: Boolean
    category: String!
    review: [Review!]
  }

  input addProductInput {
    name: String!
    title: String!
    image: String!
    rating: String
    price: String!
    description: String!
    slug: String!
    quantity: String!
    stock: String!
    onSale: Boolean
    category: String!
  }

  type Category {
    _id: ID!
    image: String!
    category: String!
    slug: String
    products: [Product!]!
  }
  input addCategoryInput {
    image: String!
    category: String!
    slug: String
  }

  type Review {
    _id: ID!
    user: String
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: String!
  }

  input AddReviewInput {
    title: String!
    comment: String!
    rating: Int!
  }
`;

module.exports = typeDefs;
