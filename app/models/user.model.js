const mongoose = require("mongoose");

// Internal Modules
const configParser = require("../../config/configParser");
const baseSchema = require("../helpers/common/baseSchema");

// Get the tableNames
const tableName = configParser.get("tableName");

const User = mongoose.model(
  tableName.DB_TBL_USER,
  new mongoose.Schema({
    ...baseSchema,
    name: {
      type: String,
      unique: true,
    },
    user_name: {
      type: String,
      unique: true,
    },
    profile_image_url: {
      type: String,
    },
    password: {
      type: String,
    },
    phone_number: {
      type: String,
      required: true,
      unique: true,
    },
    email_id: {
      type: String,
    },
  })
);
module.exports = User;
