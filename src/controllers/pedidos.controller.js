const pedidos = require("../data/pedidos");

const getAllPedidos = (req, res) => {
  res.json(pedidos);
};

const getPedidoById = (req, res) => {
  const id = parseInt(req.params.id);
  const pedido = pedidos.find((p) => p.id === id);

  if (!pedido) {
    return res.status(404).json({ message: "Pedido no encontrado" });
  }

  res.json(pedido);
};

const createPedido = (req, res) => {
  const { cliente, productos, estado } = req.body;

  if (!cliente || !productos || !Array.isArray(productos)) {
    return res.status(400).json({ message: "Datos incompletos o incorrectos" });
  }

  const nuevoPedido = {
    id: pedidos.length ? pedidos[pedidos.length - 1].id + 1 : 1,
    cliente,
    productos,
    estado: estado || "pendiente",
    fecha: new Date().toISOString(),
  };

  pedidos.push(nuevoPedido);
  res.status(201).json(nuevoPedido);
};

const updatePedido = (req, res) => {
  const id = parseInt(req.params.id);
  const pedidoIndex = pedidos.findIndex((p) => p.id === id);
  if (pedidoIndex === -1)
    return res.status(404).json({ message: "Pedido no encontrado" });

  const { cliente, productos, estado } = req.body;

  if (
    !cliente ||
    !productos ||
    !Array.isArray(productos) ||
    productos.length === 0 ||
    !total
  ) {
    return res.status(400).json({ message: "Datos incompletos o inválidos" });
  }

  pedidos[pedidoIndex] = {
    id,
    cliente,
    productos,
    estado,
    fecha: pedidos[pedidoIndex].fecha,
  };

  res.json(pedidos[pedidoIndex]);
};

const deletePedido = (req, res) => {
  const id = parseInt(req.params.id);
  const pedidoIndex = pedidos.findIndex((p) => p.id === id);
  if (pedidoIndex === -1)
    return res.status(404).json({ message: "Pedido no encontrado" });

  pedidos.splice(pedidoIndex, 1);
  res.json({ message: "Pedido eliminado" });
};

module.exports = {
  getAllPedidos,
  getPedidoById,
  createPedido,
};
