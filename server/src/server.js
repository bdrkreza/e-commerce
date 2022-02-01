const { ApolloServer } = require("apollo-server");
const express = require("express");
const cors = require("cors");
const Query = require("./resolvers/Query");
const typeDefs = require("./schema");
const connectMongoDB = require("./config/database");
const Mutation = require("./resolvers/Mutation");
const Category = require("./resolvers/Category");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const app = express();

// all middleware array
const middleware = [
  //body-parser connect
  express.json(),
  express.urlencoded({ limit: "30mb", extended: true }),
  //cors connect
  cors(),
];

// all middleware
app.use(middleware);

//database connect
connectMongoDB();

const context = ({ req }) => {
  const token = req.headers.authorization || "";
  if (token) {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    return user;
  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
    Category,
    Mutation,
  },
  context,
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
