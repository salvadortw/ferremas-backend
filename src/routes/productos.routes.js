const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  getAllProductos,
  getProductoById,
  obtenerNovedades,
  obtenerPromociones,
} = require("../controllers/productos.controller");

router.get("/", verifyToken, getAllProductos);

router.get("/:id", verifyToken, getProductoById);

router.get("/novedades/listado", verifyToken, obtenerNovedades);

router.get("/promociones/listado", verifyToken, obtenerPromociones);

module.exports = router;
