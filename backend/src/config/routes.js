const express = require("express");

module.exports = function(server) {
  // DEFINIR URL BASE PARA TODAS ROTAS
  const router = express.Router();
  server.use("/api", router);

  // Rotas Ciclo de Pagamento
  const BillingCycle = require("../api/billingCycle/billingCycleService");
  BillingCycle.register(router, "/billingCycles");
};
