// External Dependencies
const express = require("express");
const validate = require("express-validation");
const { expressjwt: jwt } = require("express-jwt");

// Internal Dependencies
const teamController = require("./team.controller");
const envConfig = require("../../../config/config");

// Instantiate router
const router = express.Router();

/**
 * POST /api/team/
 * create team
 */
router.route("/").post(
  jwt({
    secret: envConfig.jwt_secret,
    algorithms: ["sha1", "RS256", "HS256"],
  }),
  teamController.createTeam
);

/**
 * GET /api/team/
 * get team
 */
router.route("/").get(
  jwt({
    secret: envConfig.jwt_secret,
    algorithms: ["sha1", "RS256", "HS256"],
  }),
  teamController.getTeam
);

/**
 * PUT /api/team/:team_id/
 * update team
 */
router.route("/:team_id").put(
  jwt({
    secret: envConfig.jwt_secret,
    algorithms: ["sha1", "RS256", "HS256"],
  }),
  teamController.updateTeam
);

module.exports = router;
