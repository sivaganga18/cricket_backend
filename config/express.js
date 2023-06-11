// External Dependencies
const express = require("express");
const fileUpload = require("express-fileupload");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const { ValidationError } = require("express-validation");
const expressJwt = require("express-jwt");

// Internal Dependencies
const routes = require("../index.route");
const logger = require("./logger");

// Express instance
const app = express();

// Connect db
const dbConnect = require("./dbConnect");

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(
  cors({
    exposedHeaders: ["Origin, X-Requested-With, Content-Type, Accept"],
    origin: ["http://localhost:3000"],
    credentials: true,
  })
);

// parse body params and attache them to req.body
app.use(
  bodyParser.json({
    limit: "250mb",
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);
app.use(
  bodyParser.urlencoded({
    limit: "250mb",
    extended: true,
    parameterLimit: 250000,
    verify: (req, res, buf) => {
      req.rawBody = buf.toString();
    },
  })
);

// Mount logger
app.use(logger.logger);

// Connect DB
dbConnect();

// File upload
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "tmp/",
    safeFileNames: true,
    limits: { fileSize: 250 * 1024 * 1024 }, // 250 MB
  })
);

// Mount routes to api
app.use("/api", routes);

// Middleware to handle request errors
app.use((err, req, res, next) => {
  // Middleware for validation error
  if (err instanceof ValidationError) {
    const error_data = {
      status: "ERROR",
      code: 911,
      message: "Payload is not valid",
      data: [],
    };
    err.details.body.forEach((error) => {
      error_data.data.push({
        messages: error.message,
      });
    });
    return res.status(err.statusCode).send(error_data);
  }

  // Middleware for authentication error
  if (err instanceof expressJwt.UnauthorizedError) {
    return res.status(err.status).send({
      status: "ERROR",
      code: 912,
      message: "Login expired",
    });
  }
  return next(err);
});

module.exports = app;
