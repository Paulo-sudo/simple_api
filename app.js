const express = require("express");
const routes = require("./routes");
const bodyParser = require("body-parser");
class App {
  constructor() {
    this.server = express();
    const jsonParser = bodyParser.json({
      limit: 1024 * 1024 * 20,
      type: "application/json",
    });
    const urlencodedParser = bodyParser.urlencoded({
      extended: true,
      limit: 1024 * 1024 * 20,
      type: "application/x-www-form-urlencoded",
    });

    this.server.use(jsonParser);
    this.server.use(urlencodedParser);

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(express.json());
  }
  routes() {
    this.server.use(routes);
  }
}

module.exports = new App().server;
