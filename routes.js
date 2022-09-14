const { Router } = require("express");

const cors = require("cors");

const routes = new Router();

var corsOptions = { origin: "*" };

routes.use(cors(corsOptions));
routes.options("*", cors(corsOptions));

const news = require("./controllers/newsController");
const weather = require("./controllers/weatherController");
const card = require("./controllers/cardsController")

routes.get("/",cors(corsOptions),async function(req, res){
    const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
    await delay(5000);
    res.send({status:"ok", test: "simple-api", delay: "5 seconds"})
})
routes.get("/weather", cors(corsOptions), weather.Get);
routes.get("/news", cors(corsOptions), news.Get);
routes.get("/cards-shuffle", cors(corsOptions), card.GetShuffle);
routes.get("/cards-draw/:number", cors(corsOptions), card.GetDraw);
module.exports = routes;
