const express = require("express");

const StoreDataToMongoDB = require("./Auth0Functional");

const AuthRoutes = express.Router();

AuthRoutes.get("/", async (req, res) => {
  // StoreDataToMongoDB(req, res);
});

AuthRoutes.post("/", (req, res) => {
  StoreDataToMongoDB(req, res);
});

module.exports = AuthRoutes;
