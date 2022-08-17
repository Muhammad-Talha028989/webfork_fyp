const express = require("express");

const StoreDataToMongoDB = require("./Auth0Functional");

const AuthRoutes = express.Router();

// AuthRoutes.get("/", async (req, res) => {
//   // StoreDataToMongoDB(req, res);
// });

AuthRoutes.post("/", async (req, res) => {
  StoreDataToMongoDB(req, res).catch((e) => console.error(e));
});

module.exports = AuthRoutes;
