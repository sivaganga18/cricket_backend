// External Dependencies
const express = require("express");
const validate = require("express-validation");
const { expressjwt: jwt } = require("express-jwt");

// Internal Dependencies
const userController = require("./user.controller");

// Instantiate router
const router = express.Router();

/**
 * POST /api/user/
 * create user
 */
router.route("/").post(userController.createUser);

module.exports = router;
