// Internal modules
const config = require("./config/config");
const app = require("./config/express");
const port = process.env.PORT || config.app_port;

app.listen(port, () => {
  console.info(
    `Server started on port ${port} in ${config.node_env} environment`
  ); // eslint-disable-line no-console
});

module.exports = app;
