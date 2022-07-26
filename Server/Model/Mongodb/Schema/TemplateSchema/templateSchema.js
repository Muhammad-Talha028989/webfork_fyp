const mongoose = require("mongoose");

const { Schema } = mongoose;

let Template_Schema = new Schema({
  TemplateObject: Object,
});

module.exports = Template_Schema;
