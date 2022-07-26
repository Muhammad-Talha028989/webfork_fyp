const mongoose = require("mongoose");

const Template_Schema = require("../../Schema/TemplateSchema/templateSchema");

const { model } = mongoose;

const TemplateCollection = model("Template", Template_Schema);

module.exports = TemplateCollection;
