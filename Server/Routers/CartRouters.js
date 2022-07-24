const express = require("express");

const StoreCartDetailIntoDatabase = require("./RouterCells");

const CartRoutes = express.Router();

CartRoutes.get("/", (req, res) => {
  res.send({
    message: "Nothing to show",
    code: 404,
  });
});

CartRoutes.post("/", async (req, res) => {
  StoreCartDetailIntoDatabase(req, res);
});

module.exports = CartRoutes;
