require("dotenv").config();
const express = require("express");
const cors = require("cors");
// const { auth } = require("express-openid-connect");
const bodyParser = require("body-parser");

const server = express();
const axios = require("axios");
const jwt = require("express-jwt").expressjwt;
const jwks = require("jwks-rsa");

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://webfork-028989.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "webfork",
  issuer: "https://webfork-028989.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: ["/"] });

// //* auth router attaches /login, /logout, and /callback routes to the baseURL
// server.use(auth(config));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json({}));
server.use(express.json({}));

server.use(cors());

let port = process.env.PORT || process.env._ALT_PORT;

server.use(jwtCheck);

server.get("/authorized", function (req, res) {
  res.send("Secured Resource");
});

// //* req.isAuthenticated is provided from the auth router

// server.use("/login", auth0Router);

server.get("/", async (req, res) => {
  try {
    const accessToken = await req?.headers?.Authorization?.split(" ")[1];
    const response = await axios.get(
      "https://webfork-028989.us.auth0.com/userinfo",
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      },
    );
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});

server.post("/", (req, res) => {
  // console.log(req?.body);
});

server.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});

server.use((error, req, res, next) => {
  const status = error.status || 500;
  const message = error.message || "internal server error";
  res.status(status).send(message);
});
server.listen(port, () => console.log(`server running at port ${port}`));
