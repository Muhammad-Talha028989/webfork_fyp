const express = require("express");

const axios = require("axios");

const Auth0User = require("../../../Model/Mongodb/Modeling/ModelingControl");

const AuthRoutes = express.Router();

AuthRoutes.get("/", async (req, res) => {
  res.send({
    message: "Nothing to show",
    code: 404,
  });
});

AuthRoutes.post("/", async (req, res) => {
  try {
    const accessToken = await req?.headers?.authorization?.split(" ")[1];
    const response = await axios.get(
      "https://webfork-028989.us.auth0.com/userinfo",
      {
        headers: {
          authorization: `Bearer ${accessToken}`,
        },
      },
    );
    //? Code to print response

    let Auth0Docu = response?.data
      ? new Auth0User({
          sub: response?.data?.sub,
          nickname: response?.data?.nickname,
          name: response?.data?.name,
          picture: response?.data?.picture,
          updated_at: response?.data?.updated_at,
          email: response?.data?.email,
          email_verified: response?.data?.email_verified,
          templateDownload: [],
        })
      : "";
    if (Auth0Docu) {
      Auth0User.findOne({ sub: response?.data?.sub }, (err, results) => {
        if (!err && results !== null) {
          Auth0User.findOneAndUpdate(
            { sub: results?.sub },
            {
              sub: response?.data?.sub,
              nickname: response?.data?.nickname,
              name: response?.data?.name,
              picture: response?.data?.picture,
              updated_at: response?.data?.updated_at,
              email: response?.data?.email,
              email_verified: response?.data?.email_verified,
              templateDownload: [
                {
                  name: "Boostrap Template",
                },
              ],
            },
            (err, updateResponse) => {
              if (!err) {
                console.log(updateResponse);
              }
            },
          );
        } else {
          console.log("New Document is added into database");
          return Auth0Docu && Auth0Docu.save();
        }
      });
    }
    // Auth0Docu && Auth0Docu.save();
  } catch (error) {
    console.log(error);
  }
});

module.exports = AuthRoutes;
