const app = require("./express");

const localPort = 3000;
const deployPort = 3011;

let port = process.env.NODE_ENV == "local" ? localPort : deployPort;
app.listen(port, () => {
  console.log("server started at", port);
});
