const productos = require("../data/productos");

const getAllProductos = (req, res) => {
  res.json(productos);
};

const getProductoById = (req, res) => {
  const id = parseInt(req.params.id);
  const producto = productos.find((p) => p.id === id);

  if (!producto) {
    return res.status(404).json({ message: "Producto no encontrado" });
  }

  res.json(producto);
};

function obtenerNovedades(req, res) {
  const novedades = productos.filter((p) => p.esNovedad);
  res.json(novedades);
}

function obtenerPromociones(req, res) {
  const promociones = productos.filter((p) => p.enPromocion);
  res.json(promociones);
}

module.exports = {
  obtenerNovedades,
  obtenerPromociones,
  getAllProductos,
  getProductoById,
};
