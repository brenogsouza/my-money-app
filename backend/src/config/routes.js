const express = require("express");
const auth = require("./auth");

module.exports = function(server) {
  // rotas protegidas por token JWT
  const protectedApi = express.Router();
  server.use("/api", protectedApi);
  // aplicando filtro de autenticação
  protectedApi.use(auth);
  // criação de rotas
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(protectedApi, "/billingCycles");

  // rotas abertas
  const openApi = express.Router();
  server.use("/oapi", openApi);
  // methodos de authenticate
  const AuthService = require("../api/user/authService");
  //rotas
  openApi.post("/login", AuthService.login);
  openApi.post("/signup", AuthService.signup);
  openApi.post("/validateToken", AuthService.validateToken);
};
