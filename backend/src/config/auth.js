//middleware para verificação do token

const jwt = require("jsonwebtoken");
const env = require("../.env");

module.exports = (req, res, next) => {
  // 1ª verificação: verificar se o Cors esta habilitado
  if (req.method === "OPTIONS") {
    next();
  } else {
    // espera receber da requisição um toquem e armazena na constante
    const token =
      req.body.token || req.query.token || req.headers["authorization"];
    if (!token) {
      return res.status(403).send({ errors: ["No token provided"] });
    }
    // verifica o token se a valido
    jwt.verify(token, env.authSecret, function(err, decoded) {
      if (err) {
        return res.status(403).send({
          errors: ["Failed to authenticate token."]
        });
      } else {
        // req.decoded = decoded;
        next();
      }
    });
  }
};
