const sucursales = require("../data/sucursales");

const obtenerSucursales = (req, res) => {
  res.json(sucursales);
};

module.exports = {
  obtenerSucursales,
};
