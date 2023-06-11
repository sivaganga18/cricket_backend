/* eslint-disable no-param-reassign */

// Internal Modules
const { User } = require("../../models");
const message = require("../../../localization/en.json");

/**
 * This is a protected route. Will send otp to the given mobile number.
 * @function createUser
 * @param req
 * @param res
 * @returns {*}
 */
async function createUser(req, res) {
  try {
    const formdata = req.body;

    const user = await User.findOne({
      user_name: formdata.user_name,
    });

    // Check user blocked
    if (user) {
      return res.status(403).send({
        status: "ERROR",
        code: 903,
        message: message.USER_NAME_ALREADY_EXISTS,
      });
    } else {
      await User.create(formdata);
      return res.status(200).send({ code: 900, message: message.CREATED });
    }
  } catch (err) {
    console.log(err, "err");
    return res.status(500).send({ code: 901, message: message.UNKNOWN_ERROR });
  }
}

module.exports = {
  createUser,
};
