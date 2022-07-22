const mongoose = require("mongoose");

const { Schema } = mongoose;

let Auth0User_Schema = new Schema({
  sub: String,
  nickname: String,
  name: String,
  picture: String,
  updated_at: String,
  email: String,
  email_verified: Boolean,
  templateDownload: Array,
});

module.exports = Auth0User_Schema;
