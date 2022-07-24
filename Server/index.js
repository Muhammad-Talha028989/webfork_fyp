require("dotenv").config();

const express = require("express");

const cors = require("cors");

const helmet = require("helmet");

const bodyParser = require("body-parser");

const ConnectToMongodb = require("./Model/Connectivity/Connect-To-Mongodb");

const server = express();

const axios = require("axios");
const GetProtectedData = require("./Auth0/postAuth0/Auth0Cells/GetProtectedCell");

const Auth0User = require("./Model/Mongodb/Modeling/ModelingControl");

const jwt = require("express-jwt").expressjwt;

const jwks = require("jwks-rsa");

const AuthRoutes = require("./Auth0/postAuth0/AuthRouteProtected/AuthRoute");

const CartRoutes = require("./Routers/CartRouters");

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
}).unless({ path: ["*"] });

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json({}));
server.use(express.json({}));

server.use(
  cors({
    origin: "*",
    method: ["GET", "POST"],
  }),
);
server.use(helmet());

let port = process.env.PORT || process.env._ALT_PORT;

server.use(jwtCheck);

//?
ConnectToMongodb("webfork", "webfork", "WebFork").catch((e) => console.log(e));

//?

server.use("/", AuthRoutes);

server.use("/cart", CartRoutes);

server.post("/delete", async (req, res) => {
  const cartDetails = req?.body?.data;
  const accessToken = req?.headers?.authorization?.split(" ")[1];
  const response = await GetProtectedData(accessToken);
  Auth0User.findOneAndUpdate(
    { sub: response?.data?.sub },
    {
      $pull: {
        templateDownload: {
          $in: [cartDetails],
        },
        Cart: { name: cartDetails?.name },
      },
    },
    {
      returnDocument: "after",
    },
    function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.send(result);
      }
    },
  );
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
