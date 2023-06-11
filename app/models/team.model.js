const mongoose = require("mongoose");

// Internal Modules
const configParser = require("../../config/configParser");
const baseSchema = require("../helpers/common/baseSchema");

// Get the tableNames
const tableName = configParser.get("tableName");

const Team = mongoose.model(
  tableName.DB_TBL_TEAM,
  new mongoose.Schema({
    ...baseSchema,
    name: {
      type: String,
      unique: true,
    },
    short_name: {
      type: String,
      unique: true,
    },
    logo_url: {
      type: String,
    },
    address: {
      type: String,
    },
  })
);
module.exports = Team;
