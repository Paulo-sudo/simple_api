require('dotenv').config()
const axios = require("axios");

class Cards {
    async GetShuffle (req, res) {
 
        const options = {
            method: "GET",
            url: `http://deckofcardsapi.com/api/deck/${process.env.DECK}/shuffle/`,
          };
          const embaralhar = await axios.request(options);
          embaralhar.data.deck_id = "XXXXXXXXXXXXX"
        res.send(embaralhar.data)
    }
    async GetDraw (req, res) {
        const options = {
            method: "GET",
            url: `http://deckofcardsapi.com/api/deck/${process.env.DECK}/draw/`,
            params: { count: req.params.number },
          };
          const carta = await axios.request(options);
          carta.data.deck_id = "XXXXXXXXXXXX"
          res.send(carta.data)
    }
}
module.exports = new Cards();