/* eslint-disable no-param-reassign */

// Internal Modules
const { User } = require("../../models");
const message = require("../../../localization/en.json");
const jwtHelper = require("../../helpers/common/jwtHelper");

/**
 * Check the login credentials
 * Share the jwt
 * @param {*} req
 * @param {*} res
 */
async function login(req, res) {
  try {
    const formData = req.body;
    const user_detail = await User.findOne({
      user_name: formData.user_name,
      password: formData.password,
    });
    // Check otp is valid
    if (user_detail) {
      // Check OTP is not expired

      return res.status(200).send({
        status: "SUCCESS",
        code: 900,
        message: message.SUCCESS,
        data: {
          token: jwtHelper.sign({
            user_id: user_detail.id,
            name: user_detail.name,
          }),
          user_id: user_detail.id,
          name: user_detail.name,
        },
      });
    } else {
      return res.status(400).send({
        status: "ERROR",
        code: 902,
        message: message.INVAILD_PASSWORD,
      });
    }
  } catch (error) {
    return res.status(500).send({
      status: "ERROR",
      code: 910,
      message: message.UNKNOWN_ERROR,
    });
  }
}

module.exports = {
  login,
};
