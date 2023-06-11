/* eslint-disable function-paren-newline */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable max-len */
// External Dependencies
const express = require("express");

// Internal Modules
const userRoute = require("./app/api/user/user.route");
const authRoute = require("./app/api/auth/auth.route");
const teamRoute = require("./app/api/team/team.route");

// Instantiate Router
const router = express.Router();

// API to check health
router.get("/health-check", (req, res) =>
  res.status(200).send({
    status: "SUCCESS",
    message: "Site is active",
  })
);

// Mount user routes

// User
router.use("/user", userRoute);
router.use("/auth", authRoute);
router.use("/team", teamRoute);

module.exports = router;
