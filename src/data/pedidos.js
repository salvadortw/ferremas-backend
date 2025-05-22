// Estructura de pedido:
// id, cliente, productos (array con id y cantidad), estado, fecha

module.exports = [
  {
    id: 1,
    cliente: "Javier Thompson",
    productos: [
      { id: 1, cantidad: 2 },
      { id: 3, cantidad: 1 },
    ],
    estado: "pendiente",
    fecha: "2025-05-20T10:00:00Z",
  },
  {
    id: 2,
    cliente: "Ignacio Tapia",
    productos: [{ id: 2, cantidad: 1 }],
    estado: "enviado",
    fecha: "2025-05-19T15:30:00Z",
  },
];
