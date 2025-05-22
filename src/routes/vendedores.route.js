const express = require("express");
const router = express.Router();
const verifyToken = require("../middlewares/verifyToken");
const {
  obtenerVendedoresPorSucursal,
  obtenerVendedorPorId,
} = require("../controllers/vendedores.controller");

router.get("/sucursal/:id", verifyToken, obtenerVendedoresPorSucursal);

router.get("/:id", verifyToken, obtenerVendedorPorId);

module.exports = router;
