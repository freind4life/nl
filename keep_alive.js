//coba run

const express = require("express")


const server = express();

server.all('/', (req, res)=> {
    res.send('Your bot is alive!')
})

module.exports = () => {
  server.listen(3000);
}
