const { ApolloServer } = require("apollo-server");
const express = require("express");
const cors = require("cors");
const Query = require("./resolvers/Query");
const typeDefs = require("./schema");
const connectMongoDB = require("./config/database");
const Mutation = require("./resolvers/Mutation");

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
Query
const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query,
  Mutation
  },
});

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

