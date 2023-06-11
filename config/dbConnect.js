const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");

let DBURL = "";

if (process.env.NODE_ENV === "development") {
  DBURL = process.env.LOCAL_DB;
} else if (process.env.NODE_ENV === "staging") {
  DBURL = process.env.STAGING_DB;
} else if (process.env.NODE_ENV === "production") {
  DBURL = process.env.PROD_DB;
} else {
  DBURL = process.env.LOCAL_DB;
}

module.exports = function () {
  // mongoose.connect(DBURL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  //   // useCreateIndex: true,
  //   // useFindAndModify: false,
  // });
  const client = new MongoClient(DBURL);

  const db = client.connect();
  // db.on("error", console.error.bind(console, "connection error:"));
  // db.once("open", function () {});
};
