// configuração do servidor
// definição da porta
const port = 3003;
// middleware retorna o corpo da requisição todo pronto
const bodyParser = require("body-parser");
// restorna um singleton, ou seja instancia única
const expres = require("express");
// constante referente ao server, que retorna um novo servidor
const server = expres();
// constante referente ao cabeçalho
const allowCors = require("./cors");
// constante referente ao queryInt
const queryParser = require("express-query-int");

server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());
server.use(allowCors);
server.use(queryParser());

//configurando a PORTA
server.listen(port, function() {
  console.log(`BACKEND is runnin on port ${port}.`);
});

module.exports = server;
