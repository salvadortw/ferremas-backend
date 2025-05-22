const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getAllPedidos,
  getPedidoById,
  createPedido,
} = require("../controllers/pedidos.controller");

router.use(verifyToken);

router.get("/", getAllPedidos);
router.get("/:id", getPedidoById);
router.post("/", createPedido);

module.exports = router;
