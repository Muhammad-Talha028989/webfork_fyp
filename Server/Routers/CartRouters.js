const express = require("express");
const Auth0User = require("../Model/Mongodb/Modeling/ModelingControl");
const axios = require("axios");
// const StoreCartDetailIntoDatabase = require("./RouterCells");

const CartRoutes = express.Router();

CartRoutes.get("/", async (req, res) => {
  const accessToken = req?.headers?.authorization?.split(" ")[1];
  if (typeof accessToken === String || typeof accessToken === "string") {
    await axios
      .get("https://webfork-028989.us.auth0.com/userinfo", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        Auth0User.findOne({ sub: response?.data?.sub }, (err, UserData) => {
          console.info(UserData?.templateDownload);
          res.send(UserData?.templateDownload);
        });
      })
      .catch((e) => console.error(e));
  } else {
    console.error("Wrong accessToken");
  }
});

CartRoutes.post("/", async (req, res) => {
  try {
    const cartDetails = req?.body?.data;
    const accessToken = req?.headers?.authorization?.split(" ")[1];
    await axios
      .get("https://webfork-028989.us.auth0.com/userinfo", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) =>
        Auth0User.findOneAndUpdate(
          { sub: response?.data?.sub },
          {
            $push: {
              templateDownload: cartDetails,
            },
          },
          {
            returnDocument: "after",
          },
          (err, result) => {
            if (result !== null || result !== undefined) {
              // result?.templateDownload?.map((items) => console.log(items));
              console.info(result?.templateDownload);
              res.send(result?.templateDownload);
            } else {
              console.info("Document not available");
            }
          },
        ),
      )
      .catch((e) => e);
  } catch (e) {}
});

module.exports = CartRoutes;
