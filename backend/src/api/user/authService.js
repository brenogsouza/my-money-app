const _ = require("lodash");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const User = require("./user");
const env = require("../../.env");

// validar o email
const emailRegex = /\S+@\S+\.\S+/;

// // validar
// const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/;

// verificando erros do banco de dados
const sendErrosFromDB = (res, dbErros) => {
  const erros = [];
  _.forIn(dbErros.erros, error => erros.push(error.message));
  return res.status(400).json({ erros });
};
