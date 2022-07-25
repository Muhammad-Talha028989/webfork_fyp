const mongoose = require("mongoose");

const Auth0User_Schema = require("../Schema/SchemeControl");

const { model } = mongoose;

const Auth0User = model("User", Auth0User_Schema);

module.exports = Auth0User;
