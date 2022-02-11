const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
var expressWinston = require("express-winston");
var winston = require("winston");

require("./db-connection"); //For cloud-db connection
require("http").globalAgent.maxSockets = 9990;
const fs = require("fs");
const app = express();
app.use(bodyParser.json()); //receive json
app.use(cors()); //for dev, SHOULD BE ELIMINATED IN PRODUCTION

expressWinston.responseWhitelist.push("body");
app.use(
  expressWinston.logger({
    transports: [
      new winston.transports.File({
        name: "access",
        filename: "Logs/" + new Date().toDateString() + ".log",
        level: "info", //This setting is what i need to change for access lines only
        timestamp: true,
      }),
    ],
    format: winston.format.combine(
      // winston.format.colorize(),
      winston.format.timestamp({
        format: "YYYY-MM-DD HH:mm:ss",
      }),
      winston.format.printf(
        (info) =>
          `${info.timestamp} ${info.level}: ${info.message} ${JSON.stringify(
            info.meta
          )}` + (info.splat !== undefined ? `${info.splat}` : " ")
      )
    ),
    msg: "HTTP {{req.method}} {{req.url}}",
  })
);

const restrictedRouteFiles = ["suggestions.js"];

// load all routes from routes directory
const routeBaseDirectory = "./Routes/";

let files = fs.readdirSync(routeBaseDirectory);
files.forEach((file) => {
  if (restrictedRouteFiles.includes(file)) {
    console.log("Route not loaded -> ", file);
  } else {
    app.use("/api", require(routeBaseDirectory + file));
  }
});

module.exports = app;
