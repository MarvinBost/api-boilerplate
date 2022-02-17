// All dependencies
const express = require("express"); // import express
// const mongoose = require('mongoose') // import mongoose for mongo db
const authRoutes = require("./routes/auth"); // import router user
const path = require("path");
const helmet = require("helmet"); // Helmet is a set of middleware for security.

const app = express();

const result = require("dotenv").config();

app.use(helmet()); // use middleware of Helmet

app.use((req, res, next) => {
  //CORS HEADERS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  next();
});

app.use("/api/auth/", authRoutes);

module.exports = app;
