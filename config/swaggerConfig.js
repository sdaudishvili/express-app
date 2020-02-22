const config = require("config");
const options = {
  swaggerDefinition: {
    info: {
      description: "This is a sample server",
      title: "Swagger",
      version: "1.0.0"
    },
    host: `${config.api.host}:${config.api.port}`,
    basePath: "/api",
    produces: ["application/json", "application/xml"],
    schemes: ["http", "https"],
    securityDefinitions: {
      JWT: {
        type: "apiKey",
        in: "header",
        name: "authorization",
        description: ""
      }
    },
    security: [{ JWT: [] }]
  },
  basedir: __dirname, //app absolute path
  files: ["../routes/**/*.js", "../models/**/*.js"] //Path to the API handle folder
};
module.exports = options;
