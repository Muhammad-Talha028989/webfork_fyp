require("dotenv").config();
const { env } = require("process");
const { connect } = require("mongoose");

const ConnectToMongodb = async (password, username, database) => {
  let connectionString =
    `mongodb+srv://${username}:${password}@webfork.d1xkl.mongodb.net/${database}` ||
    env._MONGODB_CONNECTIONSTRING;
  return connect(connectionString, (err) => {
      if (err) {
          return console.log([err.name, err.message]);
      }
      console.log("Successful connected to Database");
  });
};

module.exports = ConnectToMongodb;
