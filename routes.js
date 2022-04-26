const { Router } = require("express");

const cors = require("cors");

const routes = new Router();

var corsOptions = { origin: "*" };

routes.use(cors(corsOptions));
routes.options("*", cors(corsOptions));

const news = require("./controllers/newsController");
const weather = require("./controllers/weatherController");

routes.get("/",cors(corsOptions),async function(req, res){
    res.send({status:"ok"})
})
routes.get("/weather", cors(corsOptions), weather.Get);
routes.get("/news", cors(corsOptions), news.Get);
module.exports = routes;
