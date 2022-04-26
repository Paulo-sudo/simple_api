require('dotenv').config()
const axios = require("axios");

class News {
    async Get (req, res) {
        console.log("CALL NEWS");
          const options = {
              method: 'GET',
              url: 'https://newsapi.org/v2/everything',
              params: {
                q: '',
                sources: 'globo',
                sortBy: 'publishedAt',
                apiKey: process.env.NEWS_KEY
              }
            };
            const noticias = await axios.request(options)
        
          
          res.send(noticias.data);
        }
}
module.exports = new News();