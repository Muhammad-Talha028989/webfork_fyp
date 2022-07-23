const express = require("express");

const Auth0User = require("../Model/Mongodb/Modeling/ModelingControl");

const axios = require("axios");

const { produce } = require("immer");

const CartRoutes = express.Router();

CartRoutes.get("/", (req, res) => {
  res.send({
    message: "Nothing to show",
    code: 404,
  });
});

CartRoutes.post("/", async (req, res) => {
  try {
    const cartDetails = req?.body?.data?.payload;
    console.log(cartDetails);
    const accessToken = req?.headers?.authorization?.split(" ")[1];

    const response = await axios.get(
      "https://webfork-028989.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );
    Auth0User.findOneAndUpdate(
      { sub: response?.data?.sub },
      {
        $push: {
          templateDownload: cartDetails,
        },
      },
      (error, result) => {
        if (!error) {
          console.log(result);
        } else {
          console.log(error);
        }
      },
    );
    // console.log(response?.data?.sub);
  } catch (e) {
    console.log(e);
  }
  res.send("");
});

module.exports = CartRoutes;
