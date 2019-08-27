const BillingCycle = require("./billingCycle");

BillingCycle.methods(["get", "post", "put", "delete"]);

// Serviço que retornará a quantidade de elementos
BillingCycle.route("count", (req, res, next) => {
  BillingCycle.count((error, value) => {
    if (error) {
      // lançar um erro de forma padronizada
      res.status(500).json({ erros: [error] });
    } else {
      res.json({ value });
    }
  });
});

BillingCycle.updateOptions({ new: true, runValidators: true });

module.exports = BillingCycle;
