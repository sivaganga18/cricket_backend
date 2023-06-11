/* eslint-disable no-param-reassign */

// Internal Modules
const { Team } = require("../../models");
const message = require("../../../localization/en.json");

/**
 * This is a protected route. Will send otp to the given mobile number.
 * @function createTeam
 * @param req
 * @param res
 * @returns {*}
 */
async function createTeam(req, res) {
  try {
    const formdata = req.body;

    const team = await Team.findOne({
      name: formdata.name,
    });

    // Check user blocked
    if (team) {
      return res.status(403).send({
        status: "ERROR",
        code: 903,
        message: message.USER_NAME_ALREADY_EXISTS,
      });
    } else {
      await Team.create(formdata);
      return res.status(200).send({ code: 900, message: message.CREATED });
    }
  } catch (err) {
    console.log(err, "err");
    return res.status(500).send({ code: 901, message: message.UNKNOWN_ERROR });
  }
}

/**
 * Get the team
 * @param {*} req
 * @param {*} res
 */
async function getTeam(req, res) {
  try {
    // Get the team list
    const teamList = await Team.find({
      status: "active",
    }).select("-created_at -updated_at -__v");

    return res.status(200).send({
      status: "SUCCESS",
      code: 900,
      data: teamList,
    });
  } catch (error) {
    return res.status(500).send({
      status: "ERROR",
      code: 910,
      message: message.UNKNOWN_ERROR,
    });
  }
}

/**
 * Update Team
 * @param {*} req
 * @param {*} res
 */
async function updateTeam(req, res) {
  try {
    // Get the detail from request
    const formData = req.body;

    // Find the team id
    let team = await Team.findOne({
      _id: req.params.team_id,
    });

    console.log(team, "team");

    if (team) {
      // Update the brand
      await Team.updateOne(
        {
          _id: req.params.team_id,
        },
        formData
      );

      return res.status(200).send({
        status: "SUCCESS",
        code: 900,
        message: `Team ${message.UPDATED_SUCCESSFULLY}`,
      });
    }

    return res.status(404).send({
      status: "ERROR",
      code: 902,
      message: `Team ${message.NOT_FOUND}`,
    });
  } catch (error) {
    console.log(error, "error");
    return res.status(500).send({
      status: "ERROR",
      code: 500,
      message: message.UNKNOWN_ERROR,
    });
  }
}

module.exports = {
  createTeam,
  getTeam,
  updateTeam,
};
