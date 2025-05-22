const vendedores = require("../data/vendedores");

function obtenerVendedoresPorSucursal(req, res) {
  const idSucursal = parseInt(req.params.id);

  if (isNaN(idSucursal)) {
    return res.status(400).json({ message: "ID de sucursal inválido." });
  }

  const resultado = vendedores.filter((v) => v.idSucursal === idSucursal);

  if (resultado.length === 0) {
    return res
      .status(404)
      .json({ message: "No se encontraron vendedores para esta sucursal." });
  }

  res.json(resultado);
}

function obtenerVendedorPorId(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res.status(400).json({ message: "ID inválido." });
  }

  const vendedor = vendedores.find((v) => v.id === id);

  if (!vendedor) {
    return res.status(404).json({ message: "Vendedor no encontrado." });
  }

  res.json(vendedor);
}

module.exports = {
  obtenerVendedoresPorSucursal,
  obtenerVendedorPorId,
};
