const { gql } = require("apollo-server");
const typeDefs = gql`
  type Query {
    user: [User]
    categories: [Category!]
    products: [Product!]!
    product(id: ID): [Product!]!
    category(id: ID!): Category
  }
  type Mutation {
    createUser(newUser: UserInput!): User
    login(email: String, password: String): Tokens
    addProduct(input: addProductInput): Product
    addCategory(input: addCategoryInput): Category
  }

  type User {
    _id: ID
    username: String!
    image: String!
    email: String!
    password: String!
    role: String!
  }

  type Tokens {
    userId: ID!
    token: String!
    tokenExpiration: Int!
  }

  type Product {
    _id:String!
    name: String!
    title: String!
    image: String!
    rating: String!
    price: String!
    quantity: Int!
    description: String!
    slug: String!
    stock: String!
    onSale: Boolean
    category: String!
  }

  type Review {
    _id: ID!
    date: String!
    title: String!
    comment: String!
    rating: Int!
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

  input UserInput {
    username: String!
    image: String
    email: String!
    password: String!
    role: String
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

  input AddReviewInput {
    date: String!
    title: String!
    comment: String!
    rating: Int!
    productId: ID!
  }
`;

module.exports = typeDefs;
