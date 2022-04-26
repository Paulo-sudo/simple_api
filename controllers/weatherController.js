require('dotenv').config()
const axios = require("axios");

class Weather {
    async Get (req, res) {
        console.log("CALL WEATHER");
        const options = {
          method: "GET",
          url: "https://api.hgbrasil.com/weather",
        };
      
        const weather = await axios.request(options);
        res.send(weather.data);
      }
}
module.exports = new Weather();