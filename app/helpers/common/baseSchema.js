const { statusTypes } = require("../../../utils/constants");

/*
  Defining common schema here, which can be imported
  in initial schema of all the models
*/
module.exports = {
  status: {
    type: String,
    enum: statusTypes,
    default: statusTypes[0],
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
};
