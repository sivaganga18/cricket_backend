// External Dependencies
const express = require("express");
const validate = require("express-validation");
const expressJwt = require("express-jwt");

// Internal Dependencies
const authController = require("./auth.controller");

// Instantiate router
const router = express.Router();

/**
 * POST /api/auth/login
 * login user
 */
router.route("/login").post(authController.login);

module.exports = router;
