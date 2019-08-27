const _ = require("lodash");

module.exports = (req, res, next) => {
  const bundle = res.locals.bundle;

  if (bundle.erros) {
    const erros = parseErros(bundle.erros);
    res.status(500).json({ erros });
  } else {
    next();
  }
};

const parseErros = nodeRestfulErros => {
  const erros = [];
  _.forIn(nodeRestfulErros, error => erros.push(error.menssage));
  return erros;
};
