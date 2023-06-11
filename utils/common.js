const bcrypt = require("bcrypt");
const logger = require("../config/logger").logging;
// intialize salt rounds for bcrypt
const saltRounds = 10;

async function hashPassword(password) {
  try {
    return await bcrypt.hash(password, saltRounds);
  } catch (error) {
    logger.error(error.stack);
    return false;
  }
}

async function checkPassword(password, hash) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    logger.error(error.stack);
    return false;
  }
}
async function genrateID(initials = "ORD") {
  try {
    var time = new Date().getTime();
    let id =
      initials +
      Math.floor(Math.random() * time)
        .toString()
        .slice(1, 11);
    return id;
  } catch (error) {
    logger.error(error.stack);
    return false;
  }
}

module.exports = {
  hashPassword,
  checkPassword,
  genrateID,
};
