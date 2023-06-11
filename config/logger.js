// External dependencies
const expressWinston = require('express-winston');
const winston = require('winston');

// Log handlers
const logger = expressWinston.logger({
    transports: [
        new winston.transports.Console()
    ],
    format: winston.format.combine(winston.format.json(), winston.format.prettyPrint()),
    requestWhitelist: ['url', 'method', 'httpVersion', 'originalUrl', 'query', 'headers.host', 'headers.user-agent'],
    responseWhitelist: ['statusCode']
});

// Instantiate logger
const logging = winston.createLogger(logger);

module.exports = {
    logger,
    logging
};