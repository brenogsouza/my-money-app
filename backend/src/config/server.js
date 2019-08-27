// configuração do servidor

// definição da porta
const port = 3003;

// middleware retorna o corpo da requisição todo pronto
const bodyParser = require("body-parser");

// restorna um singleton, ou seja instancia única
const expres = require("express");

// constante referente ao server, que retorna um novo servidor
const server = expres();

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.listen(port, function() {
  console.log(`BACKEND is runnin on port ${port}.`);
});

module.exports = server;
